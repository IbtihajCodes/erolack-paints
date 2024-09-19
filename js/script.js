"use strict";

const sideBarOpenBtn = document.querySelector(".hamburger");
const sideBarCloseBtn = document.getElementById("close-btn");
const sideBar = document.querySelector(".navbar-mobile");

sideBarOpenBtn.addEventListener("click", function () {
  sideBar.classList.remove("d-none");
});
sideBarCloseBtn.addEventListener("click", function () {
  sideBar.classList.add("d-none");
});
