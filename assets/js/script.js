/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle')
// Menu Show
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// Menu Hide
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(eachLink => eachLink.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== POPULAR SWIPER ===============*/


/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
