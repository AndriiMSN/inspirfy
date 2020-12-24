let delay = true;
setTimeout(() => {
    delay = false
}, 3500)

let wheelDelay = 1600

let counter = 0;
// let scrollHeight = 0;

window.scrollTo(0, 0)


// function debounce(func, wait, immediate) {
//     let timeout;
//     return function () {
//         let context = this, args = arguments;
//         let later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         let callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };

const sections = document.querySelectorAll(".scrolling-block");


const modalLets = document.querySelector(".lets__talk");
const modalStart = document.querySelector(".start__earning");

function returnFalse(e) {
    e.preventDefault()
    return false
}

// const navItems =
// document.querySelectorAll(".header__nav__items li");

function scrollDown() {

    // window.removeEventListener('wheel', onWheel,)
    // window.addEventListener('wheel', returnFalse, {passive: false})

    if (counter + 1 !== sections.length) {
        counter++;
        sections[counter - 1].classList.remove("active");
        sections[counter].classList.add("active");
        sections[counter].classList.add("animate");

        // Disable people or brands block adding invise
        if (counter !== sections.length) {
            sections[counter - 1].classList.add("active");
        } else {
            sections[counter - 1].classList.add("invise");
        }


        // NavBar(); // Change active item Navbar


        if (sections[counter + 1]) {
            sections[counter + 1].classList.remove('active')
            sections[counter + 1].classList.add("invise");
        }
    } else {

        counter = counter;
    }

    return counter
}

function scrollUp() {
    // window.removeEventListener('wheel', onWheel,)
    // window.addEventListener('wheel', returnFalse, {passive: false})

    if (counter - 1 !== -1) {

        counter--;
        sections[counter].classList.remove("invise");
        sections[counter + 1].classList.remove("active");
        sections[counter].classList.add("animate");
        sections[counter].classList.add("active");
        sections[counter + 1].classList.add("invise");

        // NavBar(); // Change active item Navbar

    } else {

        counter = counter;
    }

    return counter
}

function easeScroll() {
    if (counter === sections.length - 2) {
        $("html,body")
            .animate(
                {
                    scrollTop: sections[counter].offsetTop - (
                        document.documentElement.clientHeight - (sections[counter].clientHeight)) / 2,
                    behavior: "smooth",
                },
                800, (() => {
                    setTimeout(() => {
                        // window.removeEventListener('wheel', returnFalse)
                        // window.addEventListener('wheel', onWheel, {passive: false})
                    }, wheelDelay)

                })
            );
    }
        // else if (counter === sections.length - 1) {
        //     $("html,body")
        //         .animate(
        //             {
        //                 scrollTop: sections[counter - 1].offsetTop + sections[counter].offsetTop,
        //                 behavior: "smooth",
        //             },
        //             10, (() => {
        //                 setTimeout(() => {
        //                     window.removeEventListener('wheel', returnFalse)
        //                     window.addEventListener('wheel', onWheel, {passive: false})
        //                 }, wheelDelay)
        //
        //             })
        //         );
    // }
    else {
        $("html,body")
            .animate(
                {
                    scrollTop: sections[counter].offsetTop,
                    behavior: "smooth",
                },
                800, (() => {
                    setTimeout(() => {
                        // window.removeEventListener('wheel', returnFalse)
                        // window.addEventListener('wheel', onWheel, {passive: false})
                    }, wheelDelay)

                })
            );
    }
}


// function NavBar() {
// 	navItems.forEach((element) => {
// 		element.classList.remove("active");
// 	});
//
// 	if (counter > 0) {
// 		document.querySelector(".header").classList.add("scroll");
//  if (counter <= 4) {
// navItems[0].classList.add("active"); } else if (counter
// == 5) { navItems[1].classList.add("active"); } else if
// (counter == 6) { navItems[2].classList.add("active"); }
// else if (counter == 7) {
// navItems[3].classList.add("active"); } else if (counter
// == 8) { navItems[4].classList.add("active"); } else if
// (counter >= 9) { navItems[5].classList.add("active"); }
// } else {
// document.querySelector(".header").classList.remove("scroll"); } }

// window.addEventListener('wheel', (e) => {
//     if (document.documentElement.clientWidth >= 1366) {
//         let directionY = e.deltaY;
//
//         let directionX = e.deltaX;
//
//         if (directionY !== 0 && (directionX < 20 || directionX > -20)) {
//             e.preventDefault()
//         }
//     }
// }, {passive: false})

function onWheel(e) {
    // If open modals
    if (
        modalLets.classList.contains("open") ||
        modalStart.classList.contains("open")
    ) {
        return false;
    }
    if (document.documentElement.clientWidth >= 1366) {


        let directionY = e.deltaY;

        let directionX = e.deltaX;


        let maxY = sections[sections.length - 1].offsetTop;

        if (pageYOffset > maxY - 10 && maxY > 500) {
            if (directionY < 0 && directionX === 0) {

                e.preventDefault();

                scrollToSection(e,
                    directionY,
                    directionX);
            }
        } else {

            // Remove scroll after scrolling to next
            // section by Y
            if (directionY !== 0) {
                e.preventDefault();
            }

            scrollToSection(e,
                directionY,
                directionX);

            // } else {
            // if scroll up start scroll by sections
            // if (pageYOffset < maxY + 10 && directionY < 0 && directionX === 0) {
            //
            //     // Remove scroll after scrolling to
            //     // next section by Y
            //     if (directionY !== 0) {
            //         e.preventDefault();
            //     }
            //     scrollToSection(e,
            //         directionY,
            //         directionX);
            // }
            // }
        }
    }
}


// const myEfficientFn = debounce(function (e) {
//     // All the taxing stuff you do
//
//     onWheel(e)
// }, 300);

window.addEventListener(
    "wheel",

    onWheel,

    {passive: false}
);


function scrollToSection(e,
                         directionY,
                         directionX) {


    if (delay || sections[2].offsetTop === 0) {
        return;
    }


    delay = true;


    if (directionY !== 0) {
        // if scroll by y
        e.preventDefault();
        setTimeout(function () {
                delay = false;
            },
            wheelDelay);
    } else {
        // If scroll by x remove Delay
        delay = false;
    }


    if (directionY > 0 && directionX === 0) {
        //scroll down

        scrollDown()

        // Easy animation


        easeScroll()


    } else if (directionY < 0 && directionX === 0) {
        //scroll up

        scrollUp()


        // Easy animation

        easeScroll()
    }
}

let currentY = 0,
    currentX = 0

window.addEventListener('touchmove', (e) => {
    if (document.documentElement.clientWidth >= 1366) {
        ;

        if (modalLets.classList.contains("open")
            ||
            modalStart.classList.contains("open")
        ) {

        } else {
            let maxY = sections[sections.length - 1].offsetTop;
            let directionY = e.changedTouches[0].clientY - currentY;
            let directionX = e.changedTouches[0].clientX - currentX;
            console.log(directionX);
            if ((directionX > 50 || directionX < -50) && (directionY < 50 && directionY > -50)) {

            } else if (pageYOffset > maxY - 10) {
                if (directionY > 0) {
                    e.preventDefault()
                    e.stopPropagation()
                    return false
                }
            } else {


                e.preventDefault()
                e.stopPropagation()
                return false

            }
        }
    }

}, {passive: false})


window.addEventListener('touchstart', (e) => {
    if (document.documentElement.clientWidth >= 1366) {
        // e.preventDefault()
        currentY = e.changedTouches[0].clientY;
        currentX = e.changedTouches[0].clientX;


        return currentY, currentX, false
    }
}, {passive: false})

window.addEventListener(
    "touchend",
    function (e) {
        // console.log('touchend');
        // If open modals
        // e.preventDefault()
        if (
            modalLets.classList.contains("open") ||
            modalStart.classList.contains("open")
        ) {
            return false;
        }
        let directionY = e.changedTouches[0].clientY - currentY;

        let directionX = e.changedTouches[0].clientX - currentX;

        if (document.documentElement.clientWidth >= 1366 && (directionY !== 0 && directionX !== 0)) {


            // console.log(directionX, directionY);

            // console.log(directionX, directionY);


            let maxY = sections[sections.length - 1].offsetTop;

            if (pageYOffset < maxY - 10) {


                // Remove scroll after scrolling to next
                // section by Y
                if (directionY < 50 && directionY > -50) {
                    e.preventDefault();

                    // console.log('prev');
                } else {

                    // if (pageYOffset > maxY - 10 && directionY < 0) {
                    //     console.log('max');
                    // } else {

                    touchToSection(e,
                        directionY,
                        directionX);
                    // }
                }
            } else {
                if (directionY > 0) {
                    // console.log('uup');
                    touchToSection(e,
                        directionY,
                        directionX);
                }
            }

            // } else {
            // if scroll up start scroll by sections
            // if (pageYOffset < maxY && directionY < 0 && directionX === 0) {
            //
            //     // Remove scroll after scrolling to
            //     // next section by Y
            //     if (directionY !== 0) {
            //         e.preventDefault();
            //     }
            //     touchToSection(e,
            //         directionY,
            //         directionX);
            // }
        }
    },
    {passive: false}
);

function touchToSection(e, directionY, directionX) {
    if (delay || sections[2].offsetTop === 0) {
        return;
    }

    // console.log(directionX);
    delay = true;


    if (directionY > 30 || directionY < -30) {
        // if scroll by y
        e.preventDefault();
        setTimeout(function () {
                delay = false;
            },
            400);
    } else {
        // If scroll by x remove Delay
        delay = false;
    }


    if (directionY < -30) {
        //scroll down

        scrollDown()

        // Easy animation

        easeScroll()

        return counter;


    } else if (directionY > 30) {
        //scroll up

        scrollUp()

        // Easy animation

        easeScroll()
    }
}

// Remove scroll pc

window.addEventListener('scroll',
    (e) => {
        e.preventDefault()
        if (counter !== sections.length - 1) {
            if ((document.documentElement.clientWidth >= 1366)) {

                if (counter === sections.length - 2) {

                    window.scrollTo(0,
                        sections[counter].offsetTop - (
                        document.documentElement.clientHeight - (sections[counter].clientHeight)) / 2
                    )
                } else {
                    window.scrollTo(0,
                        sections[counter].offsetTop)
                }
            }
        }
    })

window.addEventListener('scroll', (e) => {
    if (document.documentElement.clientWidth < 1366) {

        if (
            pageYOffset > sections[sections.length - 2].offsetTop
        ) {

            counter = sections.length - 1;
            sections[counter].classList.add('animate')
            sections[counter].classList.add('active')
            return counter
        }

        for (let i = 0; i < sections.length; i++) {
            if (
                sections[i + 1]
                &&
                (pageYOffset > (sections[i].offsetTop + (sections[i].clientHeight / 2)) - 10)
                &&
                (pageYOffset < (sections[i + 1].offsetTop + (sections[i + 1].clientHeight) / 2))
            ) {
                console.log(i + 1);
                counter = i + 1
                sections[counter].classList.add('animate')
                sections[counter].classList.add('active')

                return counter
            }
        }
    }
})

let oldWidth = document.documentElement.clientWidth
let oldHeight = document.documentElement.clientHeight

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth !== oldWidth && document.documentElement.clientHeight !== oldHeight) {
        console.log(counter);
        sections[counter].classList.add("active");
        window.scrollTo(
            0,
            sections[counter].offsetTop
        );

        return oldWidth = document.documentElement.clientWidth, oldHeight = document.documentElement.clientHeight
    }
})

const ArrowBtnScroll = document.querySelector('.arrow__up');

['click', 'touchend'].forEach(evl => ArrowBtnScroll.addEventListener(evl, () => {
    counter = 0
    $("html,body")
        .animate(
            {
                scrollTop: sections[counter].offsetTop,
                behavior: "smooth",
            },
            800
        );
    return counter
}))


// header anchor

document.querySelectorAll(".header__nav__items li")
    .forEach((el) => {
        let nav = el.getAttribute("data-nav");
        let dataCounter = el.getAttribute("data-counter");
        // console.log(dataCounter);

        ['click', 'touchend'].forEach(evl => el.addEventListener(evl, () => {
            counter = +dataCounter;
            document.querySelector('html').classList.remove('lock')
            // sections[counter - 1].classList.remove("active");
            sections.forEach((el) => {
                el.classList.add("active");
            });
            // sections[counter - 1].classList.add("invise");
            // console.log(counter);
            $("html,body")
                .animate(
                    {
                        scrollTop: document.querySelector(`.${nav}`).offsetTop,
                        behavior: "smooth",
                    },
                    800
                );
            setTimeout(() => {
                    sections[counter].classList.add('animate')
                },
                300)
        }, false))

        // el.addEventListener("click", );
    });

// Arrow keyboard

document.onkeydown = checkKey;

function checkKey(e) {

    if (document.documentElement.clientWidth >= 1366) {

        // Remove scroll by space
        if (e.keyCode === 32 && e.target === document.body) {

            let maxY = sections[sections.length - 1].offsetTop;

            if (pageYOffset > maxY - 10) {
            } else {

                if (
                    modalLets.classList.contains("open") ||
                    modalStart.classList.contains("open")
                ) {

                } else {
                    if (delay || sections[2].offsetTop === 0) {
                        e.preventDefault();
                        return;
                    }

                    delay = true;

                    setTimeout(function () {
                            delay = false;
                        },
                        700);


                    scrollDown()

                    // Easy animation

                    easeScroll()
                }
            }
        }

        if (e.keyCode == "38") {
            // up arrow
            let maxY = sections[sections.length - 1].offsetTop;
            if (pageYOffset > maxY - 10) {
            } else {
                if (
                    modalLets.classList.contains("open") ||
                    modalStart.classList.contains("open")
                ) {

                } else {

                    // let maxY = sections[sections.length - 1].offsetTop;
                    //
                    // if (pageYOffset > maxY - 10) {
                    // } else {

                    if (delay || sections[2].offsetTop === 0) {
                        e.preventDefault();
                        return;
                    }

                    delay = true;

                    setTimeout(function () {
                            delay = false;
                        },
                        700);


                    scrollUp()

                    // Easy animation

                    easeScroll()
                }
            }
            // }

        } else if (e.keyCode == "40") {
            let maxY = sections[sections.length - 1].offsetTop;
            if (pageYOffset > maxY - 10) {
            } else {
                if (
                    modalLets.classList.contains("open") ||
                    modalStart.classList.contains("open")
                ) {

                } else {

                    // let maxY = sections[sections.length - 1].offsetTop;
                    //
                    // if (pageYOffset > maxY - 10) {
                    // } else {


                    if (delay || sections[2].offsetTop === 0) {
                        e.preventDefault();
                        return;
                    }

                    delay = true;

                    setTimeout(function () {
                            delay = false;
                        },
                        700);


                    scrollDown()

                    // Easy animation

                    easeScroll()
                }
            }
        }
    }
    // }
}


