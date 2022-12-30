export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".modal button.close"),

  toggle() {
    Modal.wrapper.classList.toggle("open");
  },
};

Modal.btnClose.onclick = () => {
  Modal.toggle();
  inputHeight.value = "";
  inputWeight.value = "";
};

window.addEventListener("keydown", handleKeydown);
function handleKeydown(event) {
  if (event.key === "Escape") {
    Modal.toggle();
  }
}
