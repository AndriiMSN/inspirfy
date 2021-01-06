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
function fitSvgTextModals(elements) {

    for (const element of elements) {

        const box = element.querySelectorAll('text') ?
            element.querySelectorAll('text') : false
        // console.log(box);

        let maxWidth, maxHeight

        maxWidth = box[0].getBBox().width
        maxHeight = box[0].getBBox().height

        if (box.length > 0) {

            for (let i = 1; i < box.length; i++) {

                (maxWidth > box[i].getBBox().width) ? maxWidth = maxWidth : maxWidth = box[i].getBBox().width

                maxHeight += box[i].getBBox().height

                // console.log(maxHeight);

            }

        }
        element ? element.style.width = `${maxWidth}px` : false
        element ? element.style.height = `${maxHeight}px` : false
    }

}

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

                    svgText && fitSvgTextModals(svgText)
                    svgText && window.addEventListener('resize', () => {
                        fitSvgTextModals(svgText)
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





