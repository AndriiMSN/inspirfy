const startEarningsBtn = document.querySelectorAll(".start-earning");

const startEarning = document.querySelector(".start__earning");

const startEarningCloseBtn = document.querySelector(
    ".start__earning .start__earning__close"
);

const letsTalkBtn = document.querySelectorAll(".write__us__block__button");

const letsTalk = document.querySelector(".lets__talk");
const letsTalkCloseBtn = document.querySelector(
    ".lets__talk .lets__talk__close"
);

const html = document.querySelector('html')

// MODALS RENDER SVG ------------------------------------------------------------------

import {fitSvgTextElements} from "./renderSVG";



const letsTalkSvgText = document.querySelectorAll('.lets__talk .svg-text')
const startEarningSvgText = document.querySelectorAll('.start__earning .svg-text')

let currPosition = 0;

OpenModal(
    startEarningsBtn,
    startEarning,
    startEarningCloseBtn,
    startEarningSvgText
);
OpenModal(
    letsTalkBtn,
    letsTalk,
    letsTalkCloseBtn,
    letsTalkSvgText
);

// Open and close modal
function OpenModal(btn,
                   modal,
                   closeBtn,
                   svgText) {

    let currElement
    // open click
    btn.forEach((el) => {
        el.addEventListener(
            "click",
            () => {

                currElement = el

                currPosition = pageYOffset;

                currElement.classList.add('clicked')

                setTimeout(() => {

                    modal.classList.add("open");

                    svgText && fitSvgTextElements(svgText)
                    svgText && window.addEventListener('resize', () => {
                        fitSvgTextElements(svgText)
                    });

                    html.classList.add('lock')
                }, 300)
                return currElement
            }
        );


    });

    // close
    closeBtn.addEventListener(
        "click",
        (e) => {
            html.classList.remove('lock')
            currElement.classList.remove('clicked')
            modal.classList.remove("open");
            window.scrollTo(
                0,
                currPosition
            );
        }
    );


}





