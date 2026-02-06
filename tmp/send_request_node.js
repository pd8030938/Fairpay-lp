(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Valid Node', email: 'valid.node2@example.com' })
    });
    console.log('status', res.status);
    const txt = await res.text();
    console.log('body', txt);
  } catch (e) {
    console.error('Request failed:', e);
  }
})();
