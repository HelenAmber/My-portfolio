const hamburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      counters = document.querySelectorAll('.myskills__progress__interest'),
      levels = document.querySelectorAll('.myskills__progress__level');

hamburger.addEventListener('click', () => {
     menu.classList.add('active');
});

close.addEventListener('click', ()=> {
     menu.classList.remove('active');
});

counters.forEach((item, i) => {
     levels[i].style.width = item.innerHTML;
});


