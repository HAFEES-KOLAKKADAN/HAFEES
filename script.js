(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const themeButton = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();

  const setMenu = (open) => {
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navLinks?.classList.toggle('open', open);
  };

  menuButton?.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  const savedTheme = localStorage.getItem('hafees-portfolio-theme');
  if (savedTheme === 'light') document.documentElement.classList.add('light-theme');
  const syncThemeControl = () => {
    const light = document.documentElement.classList.contains('light-theme');
    themeButton?.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} theme`);
    if (themeIcon) themeIcon.textContent = light ? '☾' : '☼';
  };
  syncThemeControl();
  themeButton?.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('hafees-portfolio-theme', document.documentElement.classList.contains('light-theme') ? 'light' : 'dark');
    syncThemeControl();
  });
})();
