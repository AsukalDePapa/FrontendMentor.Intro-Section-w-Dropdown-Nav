// NAV
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const closeMenu = document.getElementById('close');

// ROOT VALUE
const root = document.querySelector(':root');
const gcs = getComputedStyle(root);
const almondWhite = gcs.getPropertyValue('--almond-white');
const mediumGray = gcs.getPropertyValue('--medium-gray');

menu.addEventListener('click', () => {
    nav.classList.add('nav-show');
    root.style.setProperty('--bg-color', mediumGray);
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('nav-show');
    root.style.setProperty('--bg-color', almondWhite);
});





// DROPDOWN
// const feature = document.getElementById('feature');
// const company = document.getElementById('company');
// const featureDropDown = document.querySelector('.feature-drop-down');
// const companyDropDown = document.querySelector('.company-drop-down');

// ARROW IMAGE
// const img = document.querySelector('.company-arrow');
// const imgf = document.querySelector('.feature-arrow');


// feature.addEventListener('click', () => {
//     featureDropDown.classList.toggle('feature-drop-down');

//     imgf.classList.toggle('arrow-toggle');
// })

// company.addEventListener('click', () => {
//     companyDropDown.classList.toggle('company-drop-down');

//     img.classList.toggle('arrow-toggle');
// })

// ARROW CHANGE

// function changeImg() {
//     if(!img.src.match("down")) {
//         img.src = './images/icon-arrow-down.svg';
//     }
//     else {
//         img.src = './images/icon-arrow-up.svg';
//     }
// }
