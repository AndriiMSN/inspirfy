go();
window.addEventListener("resize", go);

function go() {
  if (document.documentElement.clientWidth > 768) {
    document.querySelector(".stages__items").style.width = `${
      (document.documentElement.clientWidth -
        document.querySelector(".hero .container").clientWidth) /
        2 +
      document.querySelector(".hero .container").clientWidth
    }px`;
  }
}
