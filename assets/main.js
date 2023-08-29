import './style.css'

document.getElementById("menu-btn").onclick = function() {
  document.getElementsByClassName("sidemenu")[0].style.left = "0px";
};
document.getElementById("menu-btn-close").onclick = function () {
  document.getElementsByClassName("sidemenu")[0].style.left="-100%";
};