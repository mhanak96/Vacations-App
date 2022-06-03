const windowsBtn = document.querySelector(".btn2");
const windowsBtn2 = document.querySelector(".btn3");
const windowsClose = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");


const appButton = document.getElementById("submit-request");

function open(e) {
  e.target.id === "modal-btn"
    ? (modal.style.display = "block")
    : (modal2.style.display = "block");
}

function close(e) {
  console.log(e);
  e.target.id === "close"
    ? (modal.style.display = "none")
    : (modal2.style.display = "none");
}
if (windowsClose) {
  windowsBtn.addEventListener("click", open);
  windowsClose.addEventListener("click", close);
}
windowsBtn2.addEventListener("click", open);
