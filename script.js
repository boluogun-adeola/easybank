const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const nav = document.getElementById("nav");
const boxshadow = document.getElementById("boxshadow");


hamburger.onclick = function() {
  hamburger.style.display = "none";
  close.style.display = "block";
  nav.style.display = "block";
  boxshadow.style.display = "block";
};

close.onclick = function() {
  hamburger.style.display = "block";
  close.style.display = "none";
  nav.style.display = "none";
  boxshadow.style.display = "none";
};