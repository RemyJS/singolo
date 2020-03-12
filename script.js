// header
let h_menu = document.querySelector('.headerMenu');

h_menu.addEventListener('click', (event) => {
    h_menu.querySelectorAll('a').forEach(el => el.classList.remove('headerActive'));
    event.target.classList.add('headerActive');
});

let phones = document.querySelectorAll('.phone');

phones.forEach(el => el.addEventListener('click',(event) =>{
    let off = el.querySelector('.display-off');
    off.hidden = !off.hidden;
}));


let arrowRight = document.querySelector('.arrow-r');
arrowRight.addEventListener('click', () => showSlides( mainSlide +=1 ));

let arrowLeft = document.querySelector('.arrow-l');
arrowLeft.addEventListener('click', () => showSlides( mainSlide -=1 ));

/* Основная функция слайдера */
let slides = document.querySelectorAll('.slide');
let mainSlide = 0;
let slidesBgc = document.querySelector('.sliderBlock__bg');
function showSlides(n) {  
    
    if (n > slides.length - 1)mainSlide = 0 
 
    if (n < 0) mainSlide = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[mainSlide].style.display = "block";

    slidesBgc.style.backgroundColor = slides[mainSlide].dataset['bgc'];
    slidesBgc.style.borderColor = slides[mainSlide].dataset['bgc'];
}
showSlides(mainSlide);