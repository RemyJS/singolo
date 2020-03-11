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
