
// NAVBAR SWITCH

window.onscroll = () => {

    const nav = document.querySelector('#nav');
    const logoWhite = document.querySelector('.nav-logo--white');
    const logoDark = document.querySelector('.nav-logo--black');
    const navLinks = document.querySelectorAll('.page-navigation__link');

    if(this.scrollY <= 10) {
        nav.classList.remove('page-navigation--fixed');
        logoWhite.style.display = 'block';
        logoDark.style.display = 'none';
        navLinks.forEach (navLink => {
            navLink.classList.remove('page-navigation__link--fixed');
        })
    }
    else {
        nav.classList.add('page-navigation--fixed');
        logoWhite.style.display = 'none';
        logoDark.style.display = 'block';
        navLinks.forEach (navLink => {
            navLink.classList.add('page-navigation__link--fixed');
        })
    }
};


// CAROUSELL HELPER FUNCTION

function reset(list,activeClassName) {
    list.forEach(listItem => {
        listItem.classList.remove(activeClassName);
    })
}


//TEAM CAROUSELL

const teamDescriptions = document.querySelectorAll('.team__description');
const teamPhotos = document.querySelectorAll('.team__photo');

function teamChangeActives(e,photoElementID,descElementID) {
    // remove class 'team__photo--active' and 'team__description--active' from all img elements
    reset(teamPhotos,'team__photo--active');
    reset(teamDescriptions,'team__description--active');

    //add class 'team__photo--active' or 'team__description--active' for targeted elementID
    document.getElementById(photoElementID).classList.add('team__photo--active');
    document.getElementById(descElementID).classList.add('team__description--active');
}


// SERVICES CAROUSELL

const servicesDescriptions = document.querySelectorAll('.descriptions__item');

function serviceChangeActive(e,elementID) {
    // remove class 'descriptions__item--active' from all description elements
    reset(servicesDescriptions,'descriptions__item--active');

    //add class 'descriptions__item--active' for targeted elementID
    document.getElementById(elementID).classList.add('descriptions__item--active');
}


//SLIDING SERVICES ON ARROW-CLICK

const arrowLeft = document.querySelector('.btn-arrow--left');
const arrowRight = document.querySelector('.btn-arrow--right');
let currentSlide = 0;

//Show previous slide
function slideLeft() {
    reset(servicesDescriptions,'descriptions__item--active');
    servicesDescriptions[currentSlide - 1].classList.toggle('descriptions__item--active');
    currentSlide--;
}

//Show next slide
function slideRight() {
    reset(servicesDescriptions,'descriptions__item--active');
    servicesDescriptions[currentSlide + 1].classList.toggle('descriptions__item--active');
    currentSlide++;
}

//Add event listener on each arrow
arrowLeft.addEventListener('click',() => {
    if(currentSlide === 0) {
        currentSlide = servicesDescriptions.length
    }
    slideLeft();
})

arrowRight.addEventListener('click',() => {
    if(currentSlide === servicesDescriptions.length - 1) {
        currentSlide = -1;
    }
    slideRight();
})