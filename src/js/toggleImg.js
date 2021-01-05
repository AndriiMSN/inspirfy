// Target block------------------------------------------------------------------------------

const TargetTitles = document.querySelectorAll(".target__toggle__block__title");

const TargetBtnLeft = document.querySelectorAll(
    ".target__slider__img__elements__buttons .left"
);

const TargetBtnRight = document.querySelectorAll(
    ".target__slider__img__elements__buttons .right"
);

const TargetMobile = document.querySelectorAll('.mob-target__slider')

const TargetDesktop = document.querySelectorAll('.target__slider')

const TargetDescriptions = document.querySelectorAll('.target__toggle__block__description')

TargetTitles.forEach((el, i) => {
    ToggleImages(
        el,
        TargetTitles,
        TargetDesktop,
        TargetMobile,
        i,
        TargetDescriptions
    );
});


TargetBtnRight.forEach((el, i) => {
    el.addEventListener("click", () => {
        RightBtn(
            TargetTitles,
            TargetDesktop,
            TargetDescriptions
        );
        // Change styles for el #3
        // if (sellingTitles[2].classList.contains("active")) {
        //     // sellingImages.classList.add("row");
        // } else {
        //     // sellingImages.classList.remove("row");
        // }
    });
})


TargetBtnLeft.forEach((el, i) => {
    el.addEventListener("click", () => {
        LeftBtn(
            TargetTitles,
            TargetDesktop,
            TargetDescriptions
        );
        // Change styles for el #3
        // if (sellingTitles[2].classList.contains("active")) {
        //     sellingImages.classList.add("row");
        // } else {
        //     sellingImages.classList.remove("row");
        // }
    });
})


// Selling block----------------------------------------------------------------------------------------------------------

const sellingTitles = document.querySelectorAll(
    ".selling__toggle__block__title"
);

const sellingBtnLeft = document.querySelectorAll(
    ".selling__slider__img__elements__buttons .left"
);

const sellingBtnRight = document.querySelectorAll(
    ".selling__slider__img__elements__buttons .right"
);

const sellingMobile = document.querySelectorAll('.mob-selling__slider')

const sellingDesktop = document.querySelectorAll('.selling__slider')

const sellingDescriptions = document.querySelectorAll('.selling__toggle__block__description')

sellingTitles.forEach((el, i) => {
    // Change styles slider for el #3
    el.addEventListener("click", () => {
        // if (i === 2) {
        //     // sellingImages.classList.add("row");
        // } else {
        //     sellingImages.classList.remove("row");
        // }
    });

    ToggleImages(
        el,
        sellingTitles,
        sellingDesktop,
        sellingMobile,
        i,
        sellingDescriptions,
        '-'
    );
});


sellingBtnRight.forEach((el, i) => {
    el.addEventListener("click", () => {
        RightBtn(
            sellingTitles,
            sellingDesktop,
            sellingDescriptions,
            "-"
        );
        // Change styles for el #3
        // if (sellingTitles[2].classList.contains("active")) {
        //     // sellingImages.classList.add("row");
        // } else {
        //     // sellingImages.classList.remove("row");
        // }
    });
})


sellingBtnLeft.forEach((el, i) => {
    el.addEventListener("click", () => {
        LeftBtn(
            sellingTitles,
            sellingDesktop,
            sellingDescriptions,
            '-'
        );
        // Change styles for el #3
        // if (sellingTitles[2].classList.contains("active")) {
        //     sellingImages.classList.add("row");
        // } else {
        //     sellingImages.classList.remove("row");
        // }
    });
})


// Tools block---------------------------------------------------------------------------------------------------------

const toolsTitles = document.querySelectorAll(
    ".tools__toggle__block__title"
);

const toolsBtnLeft = document.querySelectorAll(
    ".tools__slider__img__elements__buttons .left"
);

const toolsBtnRight = document.querySelectorAll(
    ".tools__slider__img__elements__buttons .right"
);

const toolsMobile = document.querySelectorAll('.mob-tools__slider')

const toolsDesktop = document.querySelectorAll('.tools__slider')

const toolsDescriptions = document.querySelectorAll('.tools__toggle__block__description')

toolsTitles.forEach((el, i) => {

    ToggleImages(
        el,
        toolsTitles,
        toolsDesktop,
        toolsMobile,
        i,
        toolsDescriptions
    );
});


toolsBtnRight.forEach((el, i) => {
    el.addEventListener("click", () => {
        RightBtn(
            toolsTitles,
            toolsDesktop,
            toolsDescriptions
        );
    });
})


toolsBtnLeft.forEach((el, i) => {
    el.addEventListener("click", () => {
        LeftBtn(
            toolsTitles,
            toolsDesktop,
            toolsDescriptions
        );
    });
})


// FUNCTIONS --------------------------------------------------------------------------------------------------------


function ChangeImages(element, desktopItems, i, direction = "") {

    if (element.classList.contains("active")) {

        // Show slider block
        desktopItems.forEach((el) => {
            el.classList.remove('active')
            el.classList.add('disabled')
        })

        desktopItems[i].classList.remove('disabled')
        desktopItems[i].classList.add('active')

        let bgToRipple = desktopItems[i].querySelector('.toggle-bg-img')

        if (!bgToRipple.classList.contains('rippled')) {

            let bgToRippleClassName = bgToRipple.className.split(' ')[0]

            let queryBgToRipple = $(`.${bgToRippleClassName}`)

            rippleBg(queryBgToRipple, bgToRipple.clientWidth)
        }

        bgToRipple.classList.remove('rippled')

        desktopItems[i].querySelectorAll('.toggle-parent').forEach((el) => {

            if (!el.classList.contains('animate')) {

                let child = el.querySelector('.toggle-div')

                let containerWidth = document.querySelector(`.selling .container`).clientWidth

                let documentWidth = document.documentElement.clientWidth

                let emptyWidth = (documentWidth - containerWidth) / 2

                let maxWidth = emptyWidth + containerWidth / 2

                el.style.maxWidth = `${maxWidth}px`

                let childWidth = el.clientWidth

                if (maxWidth == childWidth) {
                    el.style.transform = `translateX(${direction}${(documentWidth - containerWidth) / 2}px)`
                } else {
                    el.style.transform = `translateX(${direction}15%)`
                }

                child.style.width = `${childWidth}px`;
                // child.style.maxWidth = `${}`


                child.classList.remove('op-0')


                window.addEventListener('resize', () => {

                    let documentWidth = document.documentElement.clientWidth

                    if (documentWidth > 1150) {

                        let containerWidth = document.querySelector(`.selling .container`).clientWidth

                        let emptyWidth = (documentWidth - containerWidth) / 2

                        let maxWidth = emptyWidth + containerWidth / 2

                        el.style.maxWidth = `${maxWidth}px`

                        let childWidth = el.clientWidth

                        if (maxWidth == childWidth) {
                            el.style.transform = `translateX(${(documentWidth - containerWidth) / 2}px)`
                        } else {
                            el.style.transform = `translateX(15%)`
                        }

                        child.style.width = `${childWidth}px`;
                        // child.style.maxWidth = `${el.style.maxWidth}px`

                        let childCanvas = child.querySelector('canvas')
                        if (childCanvas) {
                            childCanvas.style.width = `${childWidth}px`
                            childCanvas.style.maxWidth = `${el.style.maxWidth}px`
                        }
                    }
                })


                let queryRipple = $(`.${child.className.split(' ')[0]}`)

                rippleElement(queryRipple, childWidth)

                el.classList.add('animate')

                setTimeout(() => {
                    el.classList.remove('animate')
                }, 1200)


            }
        })

    } else {

        // hide images
        desktopItems[i].querySelectorAll('.toggle-div').forEach((el) => {
            el.classList.add('op-0')
        })
    }
}

function ChangeImagesMob(element, mobileItem, i) {

    if (element.classList.contains('active')) {

        mobileItem.querySelectorAll('.mob-toggle-parent').forEach((el) => {

            if (!el.classList.contains('animate')) {
                el.style.maxWidth = `${document.documentElement.clientWidth}px`
                let child = el.querySelector('.mob-toggle-div')

                let childWidth = el.clientWidth

                child.style.width = `${childWidth}px`;


                window.addEventListener('resize', () => {

                    let documentWidth = document.documentElement.clientWidth

                    if (documentWidth <= 1150) {

                        el.style.maxWidth = `${documentWidth}px`

                        let childWidth = el.clientWidth
                        child.style.width = `${childWidth}px`;
                        child.style.maxWidth = `${documentWidth}px`

                        let childCanvas = child.querySelector('canvas')
                        if (childCanvas) {
                            childCanvas.style.width = `${childWidth}px`
                            childCanvas.style.maxWidth = `${documentWidth}px`
                        }
                    }
                })

                let queryRipple = $(`.${child.className.split(' ')[0]}`)

                rippleElement(queryRipple, childWidth)

                el.classList.add('animate')

                setTimeout(() => {
                    el.classList.remove('animate')
                }, 1200)
            }
        })
    }
}

function ToggleImages(el, titles, desktopItems, mobileItems, i, descriptions, direction) {
    el.addEventListener("click", () => {

        descriptions.forEach((el) => {
            el.style.height = '0px'
        })

        if (document.documentElement.clientWidth > 1150) {
            if (el.classList.contains("active") && !el.classList.contains('rm-active')) {

                el.classList.remove("active");

            } else {

                titles.forEach((el) => {

                    el.classList.remove("active");
                });

                el.classList.add("active");

            }

            if (el.classList.contains('active')) {
                descriptions[i].style.height = `${descriptions[i].querySelector('p').clientHeight}px`
            }

            window.addEventListener('resize', () => {
                if (el.classList.contains('active')) {
                    descriptions[i].style.height = `${descriptions[i].querySelector('p').clientHeight}px`
                }
            })

            titles[0].classList.remove('rm-active')
            ChangeImages(el, desktopItems, i, direction);

        } else { // MOBILE

            if (el.classList.contains("active") || el.classList.contains('rm-active')) {

                el.classList.remove("active");
                el.classList.remove('rm-active')

            } else {

                titles.forEach((el) => {

                    el.classList.remove("active");
                });

                el.classList.add("active");
            }

            if (el.classList.contains('active')) {

                descriptions[i].style.height = `${descriptions[i].querySelector('p').clientHeight}px`

            }

            window.addEventListener('resize', () => {

                if (el.classList.contains('active')) {
                    descriptions[i].style.height = `${descriptions[i].querySelector('p').clientHeight}px`

                }
            })

            titles[0].classList.remove('rm-active')

            ChangeImagesMob(el, mobileItems[i])

        }

    });


}

function RightBtn(titles, itemsDesktop, descriptions, direction) {
    let currentSlide = -1;
    let nextSlide;

    descriptions.forEach((el) => {
        el.style.height = '0px'
    })

    titles.forEach((el, i) => {
        if (el.classList.contains("active")) {

            if (el.classList.contains('rm-active')) {

                return currentSlide = -1;

            } else {

                currentSlide = i;
                return currentSlide;

            }
        }
    });

    titles.forEach((el) => {
        el.classList.remove("active");
    });

    let getNextSlide = () => {
        if (currentSlide + 1 >= titles.length) {
            nextSlide = 0;
            return nextSlide;
        } else {
            nextSlide = currentSlide + 1;
            return nextSlide;
        }
    };
    getNextSlide();

    // console.log(nextSlide);
    // console.log(titles[nextSlide]);

    titles[nextSlide].classList.remove('rm-active')
    titles[nextSlide].classList.add("active");

    descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`


    window.addEventListener('resize', () => {

        if (titles[nextSlide].classList.contains('active')) {

            descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`
        }
    })

    ChangeImages(titles[nextSlide], itemsDesktop, nextSlide, direction)

}

function LeftBtn(titles, itemsDesktop, descriptions, direction) {
    let currentSlide = -1;
    let nextSlide;

    descriptions.forEach((el) => {
        el.style.height = '0px'
    })

    titles.forEach((el, i) => {

        if (el.classList.contains("active")) {

            if (el.classList.contains('rm-active')) {

                return currentSlide = 0;

            } else {

                currentSlide = i;
                return currentSlide;

            }
        }
    });

    titles.forEach((el) => {
        el.classList.remove("active");
    });

    let getPrevSlide = () => {
        if (currentSlide - 1 <= -1) {
            nextSlide = titles.length - 1;
            return nextSlide;
        } else {
            nextSlide = currentSlide - 1;
            return nextSlide;
        }
    };
    getPrevSlide();

    titles[nextSlide].classList.remove('rm-active')
    titles[nextSlide].classList.add("active");

    descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`

    window.addEventListener('resize', () => {

        if (titles[nextSlide].classList.contains('active')) {

            descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`
        }
    })

    ChangeImages(titles[nextSlide], itemsDesktop, nextSlide, direction);

    itemsDesktop[0].querySelector('.toggle-bg-img').classList.remove('rippled')
}

function rippleElement($elemToRipple, width) {
    $elemToRipple.ripples({
        resolution: 40,
        perturbance: 0.15,
        interactive: false,
        width: width
    });


    let x = 0.5 * $elemToRipple.outerWidth();
    let y = 0.5 * $elemToRipple.outerHeight();
    // let y = 0
    // let x = 0
    let dropRadius = 200;
    let strength = 0.15;

    $elemToRipple.ripples('drop', x, y, dropRadius, strength);
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.1)
    }, 400)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.05)
    }, 600)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.025)
    }, 1000)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0)
        $elemToRipple.ripples('destroy')
    }, 1200)
}

function rippleBg($elemToRipple, width) {
    $elemToRipple.ripples({
        resolution: 40,
        perturbance: 0.15,
        interactive: false,
        width: width
    });


    let x = 0.5 * $elemToRipple.outerWidth();
    let y = 0.5 * $elemToRipple.outerHeight();
    // let y = 0
    // let x = 0
    let dropRadius = 200;
    let strength = 0.15;

    $elemToRipple.ripples('drop', x, y, dropRadius, strength);
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.1)
    }, 600)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.05)
    }, 900)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.025)
    }, 1200)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0)
        $elemToRipple.ripples('destroy')
    }, 1500)
}

// Mobile buttons

// Target-----------------------------------------------------------------------------------------------------------------

const TargetMobBtnsLeft = document.querySelectorAll(
    ".mob-target__slider__img__elements__buttons .left"
);

const TargetMobBtnsRight = document.querySelectorAll(
    ".mob-target__slider__img__elements__buttons .right"
);

const targetBlock = document.querySelector('.target')

TargetMobBtnsLeft.forEach((el) => {
    LeftBtnMob(el, TargetTitles, targetBlock, TargetMobile, TargetDescriptions)
});

TargetMobBtnsRight.forEach((el) => {
    RgtBtnMob(el, TargetTitles, targetBlock, TargetMobile, TargetDescriptions)
});


// Selling

const SellingMobBtnsLeft = document.querySelectorAll(
    ".mob-selling__slider__img__elements__buttons .left"
);

const SellingMobBtnsRight = document.querySelectorAll(
    ".mob-selling__slider__img__elements__buttons .right"
);

const sellingBlock = document.querySelector('.selling')

SellingMobBtnsLeft.forEach((el) => {
    LeftBtnMob(el, sellingTitles, sellingBlock, sellingMobile, sellingDescriptions)
});

SellingMobBtnsRight.forEach((el) => {
    RgtBtnMob(el, sellingTitles, sellingBlock, sellingMobile, sellingDescriptions)
});


// Tools -----------------------------------------------------------------------------------------------------
const toolsMobBtnsLeft = document.querySelectorAll(
    ".mob-tools__slider__img__elements__buttons .left"
);

const toolsMobBtnsRight = document.querySelectorAll(
    ".mob-tools__slider__img__elements__buttons .right"
);

const toolsBlock = document.querySelector('.tools')

toolsMobBtnsLeft.forEach((el) => {
    LeftBtnMob(el, toolsTitles, toolsBlock, toolsMobile, toolsDescriptions)
});

toolsMobBtnsRight.forEach((el) => {
    RgtBtnMob(el, toolsTitles, toolsBlock, toolsMobile, toolsDescriptions)
});

// MOB BTNS FUNCTIONS -------------------------------------------------------------------------------------------------

function RgtBtnMob(el, titles, block, mobileItems, descriptions) {

    el.addEventListener("click", () => {

        let currentSlide = -1;
        let nextSlide;

        titles.forEach((el, i) => {
            if (el.classList.contains("active") || el.classList.contains('rm-active')) {
                currentSlide = i;
                return currentSlide;
            }
        });

        titles.forEach((el) => {
            el.classList.remove("active");
        });

        let getNextSlide = () => {
            if (currentSlide + 1 >= titles.length) {
                nextSlide = 0;
                return nextSlide;
            } else {
                nextSlide = currentSlide + 1;
                return nextSlide;
            }
        };
        getNextSlide();

        titles[0].classList.remove('rm-active')
        titles[nextSlide].classList.add("active");
        // console.log(titles[nextSlide].offsetTop);

        descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`


        window.addEventListener('resize', () => {

            if (titles[nextSlide].classList.contains('active')) {

                descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`
            }
        })

        $("html,body").animate(
            {
                scrollTop: block.offsetTop + titles[nextSlide].offsetTop - 50,
                behavior: "smooth",
            },
            800
        );

        ChangeImagesMob(titles[nextSlide], mobileItems[nextSlide])
    });
}

function LeftBtnMob(el, titles, block, mobileItems, descriptions) {

    el.addEventListener("click", () => {

        let currentSlide = -1;
        let nextSlide;

        titles.forEach((el, i) => {
            if (el.classList.contains("active")) {
                currentSlide = i;
                return currentSlide;
            }
        });

        titles.forEach((el) => {
            el.classList.remove("active");
        });

        let getPrevSlide = () => {
            if (currentSlide - 1 <= -1) {
                nextSlide = toolsTitles.length - 1;
                return nextSlide;
            } else {
                nextSlide = currentSlide - 1;
                return nextSlide;
            }
        };
        getPrevSlide();

        titles[0].classList.remove('rm-active')
        titles[nextSlide].classList.add("active");
        // console.log(titles[nextSlide].offsetTop);

        descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`
        console.log(descriptions, nextSlide);

        window.addEventListener('resize', () => {

            if (titles[nextSlide].classList.contains('active')) {

                descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`
            }
        })

        $("html,body").animate(
            {
                scrollTop: block.offsetTop + titles[nextSlide].offsetTop - 50,
                behavior: "smooth",
            },
            800
        );
        ChangeImagesMob(titles[nextSlide], mobileItems[nextSlide])
    });

}

