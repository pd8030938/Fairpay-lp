import fetch from 'node-fetch';
(async () =>{
  const res = await fetch('http://localhost:3000/api/waitlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'Valid User', email: 'valid.node@example.com' }) });
  console.log('status', res.status);
  const txt = await res.text();
  console.log('body', txt);
})();
