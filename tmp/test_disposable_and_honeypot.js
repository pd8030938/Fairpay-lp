// Quick tests: disposable domain check and honeypot behavior (client-side simulation)
const { getEmailValidationError } = (() => {
  // Inline copy of minimal validator logic for quick test
  const EMAIL_REGEX = /^[A-Za-z0-9](?:[A-Za-z0-9.+_-]{0,63})@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,24}$/;
  const DISPOSABLE = new Set(['10minutemail.com','mailinator.com','yopmail.com','temp-mail.org']);
  function getEmailValidationError(e){ if (!EMAIL_REGEX.test(e)) return 'Formato de e-mail inválido'; const d = String(e).split('@')[1]?.toLowerCase()||''; if (DISPOSABLE.has(d)) return 'E-mail temporário não permitido'; return null; }
  return { getEmailValidationError };
})();

console.log('10minutemail =>', getEmailValidationError('user@10minutemail.com'));
console.log('normal =>', getEmailValidationError('user@example.com'));

// Honeypot simulation: if hp field non-empty, request should be ignored (we simulate expected outcome)
function simulateHoneypot(hp){ if (hp && hp.trim().length>0) return { ignored:true }; return { ignored:false }; }
console.log('honeypot filled =>', simulateHoneypot('botfilled'));
console.log('honeypot empty =>', simulateHoneypot(''));
