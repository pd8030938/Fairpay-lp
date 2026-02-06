export async function sendMonitoringEvent(event: { type: string; message?: string; details?: Record<string, any> }) {
  const url = process.env.MONITORING_WEBHOOK_URL;
  if (!url) return;

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ timestamp: new Date().toISOString(), ...event }),
      // timeout not available in fetch easily; rely on platform
    });
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    console.warn('Failed to send monitoring event:', errorMessage);
  }
}