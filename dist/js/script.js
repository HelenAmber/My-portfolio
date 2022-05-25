const hamburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      counters = document.querySelectorAll('.myskills__progress__interest'),
      levels = document.querySelectorAll('.myskills__progress__level'),
      pageUp = document.querySelector('.page_up'),
      promoButtonsParrent = document.querySelector('.promo__btns'),
      promoButtons = document.querySelectorAll('.promo__link');

//Opening and closing menu, block promo

hamburger.addEventListener('click', () => {
     menu.classList.add('active');
});

close.addEventListener('click', ()=> {
     menu.classList.remove('active');
});

//progress percentages, block myskills

counters.forEach((item, i) => {
     levels[i].style.width = item.innerHTML;
});

// hidden block page_up
let t;
function showChevronUp(){
  if (window.pageYOffset <= document.documentElement.clientHeight){
        pageUp.hidden = true;
     } else {
        pageUp.hidden = false; 
     }
}
window.addEventListener('scroll', showChevronUp);

// modal 

const sendMessageButton = document.querySelector('.contacts__btn');
const closeModalButton = document.querySelector('.modal__close');
const modal = document.querySelector('.modal')

sendMessageButton.addEventListener('click', (e) => {
     e.preventDefault();
     modal.classList.add('show');
     document.body.style.overflow = 'hidden';
     document.querySelectorAll('input, textarea').forEach(el=>el.value = '');
});
closeModalButton.addEventListener('click', () => {
     modal.classList.remove('show');
     document.body.style.overflow = '';
});

// portfolio, slides

const  slides = document.querySelectorAll('.portfolio__item'),
       slider = document.querySelector('.portfolio__slider'),
       prev = document.querySelector('.portfolio__slider-prev'),
       next = document.querySelector('.portfolio__slider-next'),
       current = document.querySelector('#current'),
       description = document.querySelector('.portfolio__slider__descr'),
       aboutSlide = document.querySelectorAll('.about__slide'),
       total = document.querySelector('#total'),
       slidesWrapper = document.querySelector('.portfolio__wrapper'),
       slidesField  = document.querySelector('.portfolio__slider-inner'),
       width = window.getComputedStyle(slidesWrapper).width;
       
let  slideIndex = 1,
     offset = 0;

function navigationStyle(){
     description.textContent = aboutSlide[slideIndex-1].innerText;
     if(slides.length < 10){
          current.textContent = `0${slideIndex}`;
     } else {
          current.textContent = slideIndex;
     }
     dots.forEach(dot => dot.style.opacity = '.5');
     dots[slideIndex - 1].style.opacity = 1;
    }
    
     if(slides.length < 10){
          total.textContent = `0${slides.length}`;
          current.textContent = `0${slideIndex}`;
     } else {
          total.textContent = slides.length;
          current.textContent = slideIndex;
     }
    
     slidesField.style.width = 100 * slides.length + '%';
     slidesField.style.display = 'flex';
     slidesField.style.transition = '0.5s all';
     slidesWrapper.style.overflow = 'hidden';
    
     slides.forEach(slide => {
          slide.style.width = width;
     });
    
     slider.style.position = 'relative';
     const indicators = document.createElement('ol'),
           dots = [];
     indicators.classList.add('carousel-indicators');
     indicators.style.cssText = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;
     `;
     slider.append(indicators);
    
     for (let i = 0; i < slides.length; i++){
         const dot = document.createElement('li');
             
         dot.setAttribute('data-slide-to', i + 1);
          dot.style.cssText = `
               box-sizing: content-box;
               flex: 0 1 auto;
               width: 30px;
               height: 6px;
               margin: 0 3px;
               cursor: pointer;
               background-color: #fff;
               background-clip: padding-box;
               border-top: 10px solid transparent;
               border-bottom: 10px solid transparent;
               opacity: .5;
               transition: opacity .6s ease;
          `;
    
          if (i == 0){
             dot.style.opacity = 1;
          }
    
          indicators.append(dot);
          dots.push(dot);
     }

     function deleteNotDigits(str){
          return +str.replace(/\D/g, '');
     }
    
     next.addEventListener('click', () => {
          if (offset == deleteNotDigits(width) * (slides.length - 1)){
               offset = 0;
          } else {
               offset += deleteNotDigits(width);
          }
          slidesField.style.transform = `translateX(-${offset}px)`;
    
          if(slideIndex == slides.length){
               slideIndex = 1;
          } else {
               slideIndex++;
          }
          navigationStyle(); 
     });
    
     prev.addEventListener('click', () => {
          if (offset == 0){    
               offset = deleteNotDigits(width) * (slides.length - 1);
          } else {
               offset -= deleteNotDigits(width);
          }
          slidesField.style.transform = `translateX(-${offset}px)`;
    
          if(slideIndex == 1){
               slideIndex = slides.length;
          } else {
               slideIndex--;
          }
          navigationStyle();
     });
     dots.forEach(dot => {
          dot.addEventListener('click', (e) => {
          const slideTo = e.target.getAttribute('data-slide-to');
          slideIndex = slideTo;
          offset = deleteNotDigits(width) * (slideTo - 1);
          slidesField.style.transform = `translateX(-${offset}px)`;
          navigationStyle();
          });
     });  




