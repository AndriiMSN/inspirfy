// Target block

const TargetTitles = document.querySelectorAll(".target__toggle__block__title");

const TargetImages = document.querySelector(
    ".target__slider__img__images__toggle-1"
);

const TargetClassNameImages = ".target__slider__img__images__toggle-1";

const TargetSliderImg = document.querySelector(
    ".target__slider__img__images__toggle-1 + img"
);

const TargetBtnLeft = document.querySelector(
    ".target__slider__img__elements__buttons .left"
);

const TargetBtnRight = document.querySelector(
    ".target__slider__img__elements__buttons .right"
);

TargetTitles.forEach((el) => {
});

TargetTitles.forEach((el) => {
    ToggleImages(
        el,
        TargetTitles,
        TargetImages,
        TargetSliderImg,
        TargetClassNameImages
    );
});

TargetBtnRight.addEventListener("click", () => {
    RightBtn(TargetTitles, TargetImages, TargetSliderImg, TargetClassNameImages);
});

// TargetBtnRight.addEventListener("touchstart", () => {
//     RightBtn(TargetTitles, TargetImages, TargetSliderImg, TargetClassNameImages);
// });

TargetBtnLeft.addEventListener("click", () => {
    LeftBtn(TargetTitles, TargetImages, TargetSliderImg, TargetClassNameImages);
});


// Selling block----------------------------------------------------------------------------------------------------------

const sellingTitles = document.querySelectorAll(
    ".selling__toggle__block__title"
);

// const sellingImages = document.querySelector(
//     ".selling__slider__img__images__toggle-1"
// );
//
// const sellingClassNameImages = ".selling__slider__img__images__toggle-1";
//
// const sellingSliderImg = document.querySelector(
//     ".selling__slider__img__images__toggle-1 + img"
// );

const sellingBtnLeft = document.querySelectorAll(
    ".selling__slider__img__elements__buttons .left"
);

const sellingBtnRight = document.querySelectorAll(
    ".selling__slider__img__elements__buttons .right"
);

const sellingMobile = document.querySelectorAll('.mob-selling__slider')

const sellingDesktop = document.querySelectorAll('.selling__slider')

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
        i
    );
});


sellingBtnRight.forEach((el, i) => {
    el.addEventListener("click", () => {
        RightBtn(
            sellingTitles,
            sellingDesktop
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
            sellingDesktop
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

const toolsTitles = document.querySelectorAll(".tools__toggle__block__title");

const toolsImages = document.querySelector(
    ".tools__slider__img__images__toggle-1"
);
const toolsClassNameImages = ".tools__slider__img__images__toggle-1";

const toolsSliderImg = document.querySelector(
    ".tools__slider__img__images__toggle-1 + img"
);

const toolsBtnLeft = document.querySelector(
    ".tools__slider__img__elements__buttons .left"
);

const toolsBtnRight = document.querySelector(
    ".tools__slider__img__elements__buttons .right"
);

toolsTitles.forEach((el) => {
    ToggleImages(
        el,
        toolsTitles,
        toolsImages,
        toolsSliderImg,
        toolsClassNameImages
    );
});

toolsBtnRight.addEventListener("click", () => {
    RightBtn(toolsTitles, toolsImages, toolsSliderImg, toolsClassNameImages);
});

// toolsBtnRight.addEventListener("touchstart", () => {
//     RightBtn(toolsTitles, toolsImages, toolsSliderImg, toolsClassNameImages);
// });

toolsBtnLeft.addEventListener("click", () => {
    LeftBtn(toolsTitles, toolsImages, toolsSliderImg, toolsClassNameImages);
});

// toolsBtnLeft.addEventListener("touchstart", () => {
//     LeftBtn(toolsTitles, toolsImages, toolsSliderImg, toolsClassNameImages);
// });

// FUNCTIONS --------------------------------------------------------------------------------------------------------


function ChangeImages(element, desktopItems, i) {

    if (element.classList.contains("active")) {

        // Show slider block
        desktopItems.forEach((el) => {
            el.classList.remove('active')
            el.classList.add('disabled')
        })

        desktopItems[i].classList.remove('disabled')
        desktopItems[i].classList.add('active')


        desktopItems[i].querySelectorAll('.toggle-parent').forEach((el) => {

            if (!el.classList.contains('animate')) {

                // el.style.maxWidth = `${document.documentElement.clientWidth}px`

                let child = el.querySelector('.toggle-div')

                child.classList.remove('op-0')

                let childWidth = el.clientWidth

                child.style.width = `${childWidth}px`;

                window.addEventListener('resize', () => {

                    // let documentWidth = document.documentElement.clientWidth
                    //
                    // el.style.maxWidth = `${documentWidth}px`

                    let childWidth = el.clientWidth
                    child.style.width = `${childWidth}px`;
                    // child.style.maxWidth = `${documentWidth}px`

                    let childCanvas = child.querySelector('canvas')
                    if (childCanvas) {
                        childCanvas.style.width = `${childWidth}px`
                        // childCanvas.style.maxWidth = `${documentWidth}px`
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

                    el.style.maxWidth = `${documentWidth}px`

                    let childWidth = el.clientWidth
                    child.style.width = `${childWidth}px`;
                    child.style.maxWidth = `${documentWidth}px`

                    let childCanvas = child.querySelector('canvas')
                    if (childCanvas) {
                        childCanvas.style.width = `${childWidth}px`
                        childCanvas.style.maxWidth = `${documentWidth}px`
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

function ToggleImages(el, titles, desktopItems, mobileItems, i) {
    el.addEventListener("click", () => {
        // remove active foreach
        // ads active for current
        if (el.classList.contains("active")) {
            el.classList.remove("active");
        } else {
            titles.forEach((el) => {
                el.classList.remove("active");
            });
            el.classList.add("active");
        }
        if (document.documentElement.clientWidth > 1150) {
            ChangeImages(el, desktopItems, i);
        } else {
            ChangeImagesMob(el, mobileItems[i])

        }

    });


}

function RightBtn(titles, itemsDesktop) {
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

    titles[nextSlide].classList.add("active");
    ChangeImages(titles[nextSlide], itemsDesktop, nextSlide)

}

function LeftBtn(titles, itemsDesktop) {
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
    let getPrevtSlide = () => {
        if (currentSlide - 1 <= -1) {
            nextSlide = titles.length - 1;
            return nextSlide;
        } else {
            nextSlide = currentSlide - 1;
            return nextSlide;
        }
    };
    getPrevtSlide();
    titles[nextSlide].classList.add("active");
    ChangeImages(titles[nextSlide], itemsDesktop, nextSlide);
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
        // $elemToRipple.ripples('destroy')
    }, 1200)
}

// Mobile buttons

// Target-----------------------------------------------------------------------------------------------------------------

const TargetMobBtnsLeft = document.querySelectorAll(
    ".mob-target__slider__img__elements__buttons .left"
);

const TargetMobBtnsRight = document.querySelectorAll(
    ".mob-target__slider__img__elements__buttons .right"
);

TargetMobBtnsLeft.forEach((el) => {
    el.addEventListener("click", () => {
        let currentSlide = -1;
        let nextSlide;
        TargetTitles.forEach((el, i) => {
            if (el.classList.contains("active")) {
                currentSlide = i;
                return currentSlide;
            }
        });
        TargetTitles.forEach((el) => {
            el.classList.remove("active");
        });
        let getPrevtSlide = () => {
            if (currentSlide - 1 <= -1) {
                nextSlide = TargetTitles.length - 1;
                return nextSlide;
            } else {
                nextSlide = currentSlide - 1;
                return nextSlide;
            }
        };
        getPrevtSlide();
        TargetTitles[nextSlide].classList.add("active");
        $("html,body").animate(
            {
                scrollTop: TargetTitles[nextSlide].offsetTop - 40,
                behavior: "smooth",
            },
            800
        );
    });
});

TargetMobBtnsRight.forEach((el) => {
    el.addEventListener("click", () => {
        let currentSlide = -1;
        let nextSlide;
        TargetTitles.forEach((el, i) => {
            if (el.classList.contains("active")) {
                currentSlide = i;
                return currentSlide;
            }
        });
        TargetTitles.forEach((el) => {
            el.classList.remove("active");
        });
        let getNextSlide = () => {
            if (currentSlide + 1 >= TargetTitles.length) {
                nextSlide = 0;
                return nextSlide;
            } else {
                nextSlide = currentSlide + 1;
                return nextSlide;
            }
        };
        getNextSlide();
        TargetTitles[nextSlide].classList.add("active");
        $("html,body").animate(
            {
                scrollTop: TargetTitles[nextSlide].offsetTop - 40,
                behavior: "smooth",
            },
            800
        );
    });
});


// Selling

const SellingMobBtnsLeft = document.querySelectorAll(
    ".mob-selling__slider__img__elements__buttons .left"
);

const SellingMobBtnsRight = document.querySelectorAll(
    ".mob-selling__slider__img__elements__buttons .right"
);

SellingMobBtnsLeft.forEach((el) => {
    el.addEventListener("click", () => {
        let currentSlide = -1;
        let nextSlide;
        sellingTitles.forEach((el, i) => {
            if (el.classList.contains("active")) {
                currentSlide = i;
                return currentSlide;
            }
        });
        sellingTitles.forEach((el) => {
            el.classList.remove("active");
        });
        let getPrevtSlide = () => {
            if (currentSlide - 1 <= -1) {
                nextSlide = sellingTitles.length - 1;
                return nextSlide;
            } else {
                nextSlide = currentSlide - 1;
                return nextSlide;
            }
        };
        getPrevtSlide();
        sellingTitles[nextSlide].classList.add("active");
        $("html,body").animate(
            {
                scrollTop: sellingTitles[nextSlide].offsetTop - 40,
                behavior: "smooth",
            },
            800
        );
        ChangeImagesMob(sellingTitles[nextSlide], sellingMobile[nextSlide])

    });
});

SellingMobBtnsRight.forEach((el) => {
    el.addEventListener("click", () => {
        let currentSlide = -1;
        let nextSlide;

        sellingTitles.forEach((el, i) => {
            if (el.classList.contains("active")) {
                currentSlide = i;
                return currentSlide;
            }
        });

        sellingTitles.forEach((el) => {
            el.classList.remove("active");
        });

        let getNextSlide = () => {
            if (currentSlide + 1 >= sellingTitles.length) {
                nextSlide = 0;
                return nextSlide;
            } else {
                nextSlide = currentSlide + 1;
                return nextSlide;
            }
        };
        getNextSlide();

        sellingTitles[nextSlide].classList.add("active");

        $("html,body").animate(
            {
                scrollTop: sellingTitles[nextSlide].offsetTop - 40,
                behavior: "smooth",
            },
            800
        );

        ChangeImagesMob(sellingTitles[nextSlide], sellingMobile[nextSlide])
    });
});


// Tools

const toolsMobBtnsLeft = document.querySelectorAll(
    ".mob-tools__slider__img__elements__buttons .left"
);

const toolsMobBtnsRight = document.querySelectorAll(
    ".mob-tools__slider__img__elements__buttons .right"
);

toolsMobBtnsLeft.forEach((el) => {
    el.addEventListener("click", () => {
        let currentSlide = -1;
        let nextSlide;
        toolsTitles.forEach((el, i) => {
            if (el.classList.contains("active")) {
                currentSlide = i;
                return currentSlide;
            }
        });
        toolsTitles.forEach((el) => {
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
        toolsTitles[nextSlide].classList.add("active");
        $("html,body").animate(
            {
                scrollTop:
                    document.querySelector(".tools").offsetTop +
                    toolsTitles[nextSlide].offsetTop -
                    40,
                behavior: "smooth",
            },
            800
        );
    });
});

toolsMobBtnsRight.forEach((el) => {
    el.addEventListener("click", () => {
        let currentSlide = -1;
        let nextSlide;
        toolsTitles.forEach((el, i) => {
            if (el.classList.contains("active")) {
                currentSlide = i;
                return currentSlide;
            }
        });
        toolsTitles.forEach((el) => {
            el.classList.remove("active");
        });
        let getNextSlide = () => {
            if (currentSlide + 1 >= toolsTitles.length) {
                nextSlide = 0;
                return nextSlide;
            } else {
                nextSlide = currentSlide + 1;
                return nextSlide;
            }
        };
        getNextSlide();
        toolsTitles[nextSlide].classList.add("active");
        $("html,body").animate(
            {
                scrollTop:
                    document.querySelector(".tools").offsetTop +
                    toolsTitles[nextSlide].offsetTop -
                    40,
                behavior: "smooth",
            },
            800
        );
    });
});

