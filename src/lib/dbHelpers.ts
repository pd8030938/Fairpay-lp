// Small semaphore + retry helper for DB writes to mitigate prepared-statement issues
export class Semaphore {
  private max: number;
  private current = 0;
  private waiters: Array<() => void> = [];

  constructor(max: number) {
    this.max = max;
  }

  async acquire() {
    if (this.current < this.max) {
      this.current++;
      return;
    }
    await new Promise<void>((resolve) => this.waiters.push(resolve));
    this.current++;
  }

  release() {
    this.current = Math.max(0, this.current - 1);
    const next = this.waiters.shift();
    if (next) next();
  }
}

const WRITE_CONCURRENCY = Number(process.env.DB_WRITE_CONCURRENCY) || 2;
export const dbWriteSemaphore = new Semaphore(WRITE_CONCURRENCY);

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export function isPreparedStmtError(e: any) {
  return Boolean(
    e?.message?.toLowerCase?.().includes('prepared statement') ||
    e?.code === '42P05' ||
    e?.code === 'P1017' ||
    (typeof e?.message === 'string' && /prepared statement \\"s\d+\\"/.test(e.message))
  );
}

export async function runWriteOperationWithRetries<T>(fn: () => Promise<T>, maxAttempts = 5) {
  await dbWriteSemaphore.acquire();
  try {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await fn();
      } catch (e: any) {
        if (isPreparedStmtError(e) && attempt < maxAttempts) {
          const backoff = 100 * Math.pow(2, attempt) + Math.floor(Math.random() * 100);
          console.warn(`DB write attempt ${attempt} failed with prepared-stmt error, retrying after ${backoff}ms:`, e?.message || e);
          await sleep(backoff);
          continue;
        }
        throw e;
      }
    }
    throw new Error('DB write failed after retries');
  } finally {
    dbWriteSemaphore.release();
  }
}