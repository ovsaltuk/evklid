let burger = document.querySelector('.nav__burger');
let menu = document.querySelector('.nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('nav__burger--active');
  menu.classList.toggle('nav--hidden');
  menu.classList.toggle('nav--active');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('nav__burger--active');
    menu.classList.toggle('nav--active');
    menu.classList.toggle('nav--hidden');
    document.body.classList.remove('stop-scroll');

  })
})

// tabs

let tabsBtn = document.querySelectorAll('.how__step-link');
let tabsItem = document.querySelectorAll('.tabs-item');
let tabsImg = document.querySelectorAll('.how__content-img');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('how__step-link--active') });
    e.currentTarget.classList.add('how__step-link--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

    tabsImg.forEach(function (element) { element.classList.remove('how__content-img--active') });
    document.querySelector(`[data-img-url="${path}"]`).classList.add('how__content-img--active');
  });
});

let searchBtn = document.querySelector('.header__button');
let searchForm = document.querySelector('.searching-form')
let searchCloseBtn = document.querySelector('.closed-search');

searchBtn.addEventListener('click', function () {
  searchForm.classList.add('searching-form--active');
  searchBtn.classList.add('header__button-invisible');
});

searchCloseBtn.addEventListener('click', function () {
  searchForm.classList.remove('searching-form--active');
  searchBtn.classList.remove('header__button-invisible');
});

// swiper
let swiper = new Swiper('.hero__swiper', {
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },

  autoplay: {
    delay: 5000,
  },


});

// accordion
new Accordion('.accordion-container', {
  onOpen: function(currentElement) {
    currentElement.querySelector('.cross').classList.add('cross--active');
  },
  onClose: function(currentElement) {
    currentElement.querySelector('.cross').classList.remove('cross--active');
  }
});






