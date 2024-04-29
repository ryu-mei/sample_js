'use strict';

const navBarList = document.querySelectorAll('.navbar_list');
navBarList.forEach((nav) => {
  nav.addEventListener('click', nenuOpen);
});

function nenuOpen(e) {
  const dropMenu = e.currentTarget.querySelectorAll('.drop_menu_top');
  dropMenu.forEach((menu) => {
    menu.classList.add('is-active');
  });
}
