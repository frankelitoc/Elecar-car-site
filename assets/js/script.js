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
const header = document.getElementById('header')
function scrollHeaderAction() {
    // When the scroll amount is bigger the 50 viewport height then add the scroll-header class in the header tag
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header')
    }else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeaderAction)
/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper('.popular__container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },1024: {
            spaceBetween: 46,
        }
    }
})

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
})
const  featuredButton = document.querySelectorAll('.featured__item')
function activeFeaturedButton() {
    featuredButton.forEach((previousButton) => {
        previousButton.classList.remove('active-featured')
    })
    this.classList.add('active-featured')
}
featuredButton.forEach((currentButton)=> {
    currentButton.addEventListener('click', activeFeaturedButton)
})
/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
