const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const link_title = document.querySelectorAll(".link-heading");
const arrow_img = document.querySelectorAll(".arrow-img");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("show");
  overlay.classList.toggle("active");
});

link_title.forEach((title) => {
  const list = title.nextElementSibling;
  const arrow_img = title.querySelector(".arrow-img");

  title.addEventListener("click", () => {
    list.classList.toggle("display");
    arrow_img.classList.toggle("rotate");
  });
});
