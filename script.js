const btn = document.getElementById("toggle");
const menu = document.getElementById("navbar");
const close = document.getElementById("close");

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

close.addEventListener("click", () => {
  menu.classList.remove("open");
});
