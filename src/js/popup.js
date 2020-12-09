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
    letsTalkCloseBtn
);

// Open and close modal
function OpenModal(btn,
                   modal,
                   closeBtn) {
    // open click
    btn.forEach((el) => {
        el.addEventListener(
            "click",
            () => {
                currPosition = pageYOffset;
                modal.classList.add("open");
                document.querySelector('html').classList.add('lock')
            }
        );

        // el.addEventListener(
        //     "touchstart",
        //     () => {
        //         currPosition = pageYOffset;
        //         modal.classList.add("open");
        //         document.querySelector('html').classList.add('lock')
        //     }
        // );
    });

    // close
    closeBtn.addEventListener(
        "click",
        (e) => {
            document.querySelector('html').classList.remove('lock')
            modal.classList.remove("open");
            window.scrollTo(
                0,
                currPosition
            );
        }
    );

    // closeBtn.addEventListener(
    //     "touchstart",
    //     () => {
    //         document.querySelector('html').classList.remove('lock')
    //         modal.classList.remove("open");
    //         window.scrollTo(
    //             0,
    //             currPosition
    //         );
    //     }
    // );
}



