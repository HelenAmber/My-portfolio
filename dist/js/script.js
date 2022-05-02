const hamburger = document.querySelector('.humburger');
      menu = document.querySelector('.menu');
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
     menu.classList.add('active');
});

close.addEventListener('click', ()=> {
     menu.classList.remove('active');
});
