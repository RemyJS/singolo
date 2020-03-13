// header
let h_menu = document.querySelector('.headerMenu');

h_menu.addEventListener('click', (event) => {
    h_menu.querySelectorAll('a').forEach(el => el.classList.remove('headerActive'));
    event.target.classList.add('headerActive');
});

let phones = document.querySelectorAll('.phone');

phones.forEach(el => el.addEventListener('click', (event) => {
    let off = el.querySelector('.display-off');
    off.hidden = !off.hidden;
}));


let arrowRight = document.querySelector('.arrow-r');
arrowRight.addEventListener('click', () => showSlides(mainSlide += 1));

let arrowLeft = document.querySelector('.arrow-l');
arrowLeft.addEventListener('click', () => showSlides(mainSlide -= 1));

/* Основная функция слайдера */
let slides = document.querySelectorAll('.slide');
let mainSlide = 0;
let slidesBgc = document.querySelector('.sliderBlock__bg');
function showSlides(n) {

    if (n > slides.length - 1) mainSlide = 0

    if (n < 0) mainSlide = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[mainSlide].style.display = "block";

    slidesBgc.style.backgroundColor = slides[mainSlide].dataset['bgc'];
    slidesBgc.style.borderColor = slides[mainSlide].dataset['bgc'];
}
showSlides(mainSlide);

//portfolio 

let pButtons = document.querySelectorAll('.portfolio__header_buttons a');
let pImages = document.querySelectorAll('.p_images');

pButtons.forEach(el => {// portfolio buttons
    el.addEventListener('click', (event) => {
        event.preventDefault();
        function shake() {
            let images = document.querySelectorAll('.portfolio__images img');
            let src = [];
            let save;//сохраняем ссылку изображения
            images.forEach((el, i) => {
                if (el.closest('.p_checked')) {
                    pImages.forEach(el => el.classList.remove('p_checked'));
                    save = el.src;
                }
                src.push(el.src)
            });


            for (let i = src.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = src[j];
                src[j] = src[i];
                src[i] = temp;
            }

            images.forEach((el, i) => {
                el.src = src[i];
                if (src[i] == save) {
                    // рамка добавляется блоку в котором картинка с адрессом save 
                    let pimage = el.closest('.p_images');
                    pimage.classList.add('p_checked');
                }
            });

        };
        shake();
    });
});


pImages.forEach(elem => {//portfolio border
    elem.addEventListener('click', () => {
        pImages.forEach(el => el.classList.remove('p_checked'));
        elem.classList.add('p_checked');
    })
})

// Get a quote

let btnOk = document.querySelector('#btn_Ok');
let btnSub = document.querySelector('#btn_sub');
let mbg = document.querySelector('.msg__bg');

let theme = document.querySelector('#theme');
let text = document.querySelector('#discript');

btnOk.addEventListener('click', () => {


    theme.innerHTML ='';
    text.innerHTML ='';
    mbg.classList.add('msg_hidden');
});
btnSub.addEventListener('click', (event) => {
    let name = document.querySelector('input[name = "name"]');
    let mail = document.querySelector('input[name="email"]');
    if (name.validity.valueMissing || mail.validity.valueMissing) {
        return;
    } else {
        event.preventDefault();
        let subject = document.querySelector('input[name="subject"]');
        let description = document.querySelector('textarea[name="description"]');

        let sv = '';
        if (subject.value) {
            sv = `Тема: ${subject.value}`;
        } else {
            sv = `Без темы`;
        };

        let dv = '';
        if (description.value) {
            dv = `Описание: ${description.value}`;
        } else {
            dv = `Без описания`;
        }
        theme.append(sv);
        text.append(dv);
        mbg.classList.remove('msg_hidden');
    }

});