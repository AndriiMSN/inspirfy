document.querySelectorAll(".faq__toggle__items__item").forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});


