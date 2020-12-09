const faqAll = document.querySelectorAll(".faq__toggle__items__item")

faqAll.forEach((el) => {
    el.addEventListener("click", () => {
        let isActive = el.classList.contains('active')
        faqAll.forEach(el => el.classList.remove('active'))
        isActive ?
            el.classList.remove('active')
            : el.classList.add('active')
    });
});


