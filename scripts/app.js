const bars = document.querySelector(".header-icon");
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".header-icon i");

bars.addEventListener("click", () => {
  if (menuIcon.classList.contains("fa-bars")) {
    menu.style.left = "0";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  }else{
    menu.style.left = "-256px";
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});
