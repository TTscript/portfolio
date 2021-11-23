import { langToggle } from './lang-toggle.js';

const select = document.querySelector('select');
const allLang = ['en', 'ru'];

select.addEventListener('change', changeUrlLanguage)

function changeUrlLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
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


console.log(langToggle);
