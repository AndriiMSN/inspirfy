// setTimeout(() => {
//   document.querySelector(".header__logo").classList.add("scale");
// }, 2950);

// setTimeout(() => {
//   // document.querySelector(".cover").classList.add("hidden");
//   if (document.documentElement.clientWidth > 768) {
//     document.querySelector(".header .header__start").classList.add("init");
//     // document.querySelector(".header .header__nav").classList.add("init");
//   }
// }, 2900);

let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function InitSections() {
    setTimeout(() => {

        document
            .querySelector(".hero .container .hero__title")
            .classList.add("normalize");

        document.querySelector(".header").classList.add("normalize");
        document.querySelector(".cover").classList.add("hide");

        const sectionsAllToShow = document.querySelectorAll("section")

        const ShowHideSections = async () => {
            for (let i = 0; i <= sectionsAllToShow.length - 1; i++) {
                sectionsAllToShow[i].classList.remove('hide-section')
                await wait(10)
            }
        }

        ShowHideSections()

    }, 3000);

    // }
    // else {
    //   console.log("object");
    //   document.querySelectorAll("section").forEach((el) => {
    //     el.classList.remove("hide");
    //   });
    // }
}

window.addEventListener('resize', () => {
    document.querySelector('.header__logo').style.animation = 'none'
    document.querySelector('.header__mobBtn').style.animation = 'none'
    document.querySelector('.header__nav').style.animation = 'none'
    document.querySelector('.header .start-earning').style.animation = 'none'
})
InitSections();


// window.addEventListener("resize", InitSections);
