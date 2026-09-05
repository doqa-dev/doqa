document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();

  const footer = document.querySelector('.site-footer .container');
  if (footer && !document.querySelector('.copyright')) {
    const small = document.createElement('p');
    small.className = 'copyright';
    small.textContent = `© ${year} Alex Morgan`;
    small.style.color = '#b9c6db';
    small.style.marginTop = '1rem';
    footer.appendChild(small);
  }
});
