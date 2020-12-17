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

let currPosition = 0;

OpenModal(
    startEarningsBtn,
    startEarning,
    startEarningCloseBtn
);
OpenModal(
    letsTalkBtn,
    letsTalk,
    letsTalkCloseBtn,
);

// Open and close modal
function OpenModal(btn,
                   modal,
                   closeBtn) {

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
                    document.querySelector('html').classList.add('lock')
                }, 300)
                return currElement
            }
        );


    });

    // close
    closeBtn.addEventListener(
        "click",
        (e) => {
            document.querySelector('html').classList.remove('lock')
            console.log(currElement);
            currElement.classList.remove('clicked')
            modal.classList.remove("open");
            window.scrollTo(
                0,
                currPosition
            );
        }
    );


}



