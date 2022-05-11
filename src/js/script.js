const hamburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      counters = document.querySelectorAll('.myskills__progress__interest'),
      levels = document.querySelectorAll('.myskills__progress__level'),
      pageUp = document.querySelector('.page_up');

hamburger.addEventListener('click', () => {
     menu.classList.add('active');
});

close.addEventListener('click', ()=> {
     menu.classList.remove('active');
});

counters.forEach((item, i) => {
     levels[i].style.width = item.innerHTML;
});

function showChevronUp(){
  if (window.pageYOffset <= document.documentElement.clientHeight){
        pageUp.hidden = true;
     } else {
        pageUp.hidden = false; 
     }
}

window.addEventListener('scroll', showChevronUp);
