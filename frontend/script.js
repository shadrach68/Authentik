const open = document.getElementById("opener");
const close = document.getElementById("closer");
const menu = document.querySelector("nav ul");

close.addEventListener("click", () => {
  menu.classList.add("active");
  open.style.display = "block";
  close.style.display = "none";
});

open.addEventListener("click", () => {
  menu.classList.remove("active");
  open.style.display = "none";
  close.style.display = "block";
});
