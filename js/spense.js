//RESPONSIVE NAVIGATION MENU
const toggleMenu = document.querySelector( '.nav__toggle' );
const menu = document.querySelector( '.nav__list' );

toggleMenu.addEventListener( 'click', function() {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
});