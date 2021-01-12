import {fitSvgTextElements} from "./renderSVG";

const mobileButton = document.querySelector('.header__mobBtn')

const mobileMenu = document.querySelector('.mobile__menu')

const mobileButtonClose = document.querySelector('.mobile__menu__close')

const sectionsAll = document.querySelectorAll('body section')

const sectionsForNav = document.querySelectorAll('.scrolling-block')

const header = document.querySelector('.header')

const mobileNavItems = document.querySelectorAll('.mobile__menu__nav__items li')

// const ArrowBtnUp = document.querySelector('.arrow__up')

const MobileSvg = document.querySelectorAll('.mobile__menu .svg-text')

mobileButton.addEventListener('click', () => {
    document.querySelector('html').classList.add('lock')
    mobileMenu.classList.add('open')

    MobileSvg && fitSvgTextElements(MobileSvg)
    MobileSvg && window.addEventListener('resize', () => {
        fitSvgTextElements(MobileSvg)
    });

    // NavBar()
})

mobileNavItems.forEach((el) => {


    el.addEventListener("click", () => {
        mobileNavItems.forEach(el => el.classList.remove('active'))
        let nav = el.getAttribute("data-nav");

        el.classList.add('active')

        mobileMenu.classList.remove('open')

        // sectionsAll.forEach((el) => {
        //     // el.classList.remove('blur')
        // })

        document.querySelector('html').classList.remove('lock')
        $("html,body").animate(
            {
                scrollTop: document.querySelector(`.${nav}`).offsetTop,
                behavior: "smooth",
            },
            800
        );
    });
})

mobileButtonClose.addEventListener('click', () => {
    document.querySelector('html').classList.remove('lock')
    mobileMenu.classList.remove('open')

})


// function NavBar() {
//     mobileNavItems.forEach((element) => {
//         element.classList.remove("active");
//     });
//
//     if (pageYOffset <= sectionsForNav[4].offsetTop) {
//         mobileNavItems[0].classList.add("active");
//
//     } else if (pageYOffset >= sectionsForNav[5].offsetTop && pageYOffset < sectionsForNav[6].offsetTop) {
//         mobileNavItems[1].classList.add("active");
//
//     } else if (pageYOffset >= sectionsForNav[6].offsetTop && pageYOffset < sectionsForNav[7].offsetTop) {
//         mobileNavItems[2].classList.add("active");
//
//     } else if (pageYOffset >= sectionsForNav[7].offsetTop && pageYOffset < sectionsForNav[8].offsetTop) {
//         mobileNavItems[3].classList.add("active");
//
//     } else if (pageYOffset >= sectionsForNav[8].offsetTop && pageYOffset < sectionsForNav[9].offsetTop) {
//         mobileNavItems[4].classList.add("active");
//
//     } else if (pageYOffset >= sectionsForNav[9].offsetTop) {
//         mobileNavItems[5].classList.add("active");
//     }
//
// }

