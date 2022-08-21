(() => {
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');
  const mobileMenu = document.querySelector('[data-menu]');
  const body = document.querySelector('body');

  menuOpenBtn.addEventListener('click', openModal);
  menuCloseBtn.addEventListener('click', openModal);

  function openModal() {
    mobileMenu.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  }
})();
________________________________________;
/*
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modal.classList.toggle('is-open');
  }
})();
________________________________________________________
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modall-open]'),
    closeModalBtn: document.querySelector('[data-modall-close]'),
    modal: document.querySelector('[data-modall]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
*/
