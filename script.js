function copyText() {
  const el = document.createElement('input');
  el.value = 'brackney.jake@gmail.com';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};