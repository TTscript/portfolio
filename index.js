import { langToggle } from './lang-toggle.js';

const select = document.querySelector('select');
const allLang = ['en', 'ru'];
const christmasTree = document.querySelector('.page-main__inner');

if (window.location.pathname === '/index.html') {
    christmasTree.addEventListener('click', () => {
        window.location.pathname = '/new-year.html';
    });
} 

select.addEventListener('change', changeUrlLanguage)

function changeUrlLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }

    select.value = hash;
    document.querySelector('.page__title').innerHTML = langToggle['title'][hash];
    for (let key in langToggle) {
        let elem = document.querySelector('.lng-' + key);

        if (elem) {
            elem.innerHTML = langToggle[key][hash];
        }
    }
}
changeLanguage();

const days = document.querySelector('.main-new-year__days-num');
const hours = document.querySelector('.main-new-year__hours-num');
const minutes = document.querySelector('.main-new-year__minutes-num');
const seconds = document.querySelector('.main-new-year__seconds-num');

const currentDate = new Date().getFullYear();
const newYear = new Date(`January 1 ${currentDate + 1} 00:00:00`);

function updateCountdownTime() {
    const currentTime = new Date();
    const diff = newYear - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24 ;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h; 
    minutes.innerHTML = m < 10 ? '0' + m : m; 
    seconds.innerHTML = s < 10 ? '0' + s : s; 

}

setInterval(updateCountdownTime, 1000);