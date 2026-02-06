import { promises as fs } from 'fs';

export const dbMetrics = {
  totalWrites: 0,
  fallbackCount: 0,
  lastFallbackAt: null as number | null,

  incrementWrite() {
    this.totalWrites++;
  },

  async incrementFallback(details?: string) {
    this.fallbackCount++;
    this.lastFallbackAt = Date.now();
    // persist a short log line for external monitoring/alerts
    try {
      await fs.appendFile('tmp/db_fallbacks.log', `${new Date().toISOString()} - fallback - ${details || ''}\n`);
    } catch (err) {
      // best-effort - don't crash
      console.warn('Failed to append db fallback log:', err);
    }

    // fire external monitoring webhook (best-effort)
    try {
      const { sendMonitoringEvent } = await import('./monitoring');
      sendMonitoringEvent({ type: 'db_fallback', message: details || '', details: { email: details?.split('=')?.[1] || undefined } });
    } catch (err) {
      // ignore failures
    }
  },

  getMetrics() {
    return {
      totalWrites: this.totalWrites,
      fallbackCount: this.fallbackCount,
      lastFallbackAt: this.lastFallbackAt ? new Date(this.lastFallbackAt).toISOString() : null,
    };
  }
};
