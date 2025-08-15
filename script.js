
(function(){
  const form = document.getElementById('waitlistForm');
  const email = document.getElementById('email');

  function showToast(msg){
    const t = document.createElement('div');
    t.textContent = msg;
    t.setAttribute('role','status');
    t.style.position='fixed';
    t.style.bottom='24px';
    t.style.left='50%';
    t.style.transform='translateX(-50%)';
    t.style.background='linear-gradient(135deg,var(--grad-start),var(--grad-end))';
    t.style.color='#fff';
    t.style.padding='10px 14px';
    t.style.borderRadius='999px';
    t.style.boxShadow='0 10px 30px rgba(0,0,0,0.35)';
    t.style.zIndex='9999';
    document.body.appendChild(t);
    setTimeout(()=> t.remove(), 2200);
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = (email.value || '').trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
      email.focus();
      showToast('Please enter a valid email.');
      return;
    }
    try{
      // Placeholder: store locally; replace with your form endpoint later
      const key = 'kinavo.waitlist';
      const list = JSON.parse(localStorage.getItem(key) || '[]');
      if(!list.includes(value)) list.push(value);
      localStorage.setItem(key, JSON.stringify(list));
      showToast('Thanks! We’ll be in touch.');
      form.reset();
    }catch(err){
      showToast('Thanks!');
    }
  });
})();
