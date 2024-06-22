(function () {

  function $ (element) {
    return document.querySelector.bind(document)(element);
  }

  function noScroll () {
    document.body.classList.toggle(
      'overflow-hidden', header.classList.contains('open')
    );
  }

  const [ header, headerMenu ] = ['header.header', '#header__menu'].map($);

  document.addEventListener('DOMContentLoaded', _ => {
    headerMenu.addEventListener('click', e => {
      e.preventDefault();

      header.classList.toggle('open');

      window.scrollTo(0, 0);

      noScroll();
    }, false);

  }, false);

})();