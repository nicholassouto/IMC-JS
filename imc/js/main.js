import { Modal } from "./modal.js";
import { alertError } from "./alert.js";
import { notANumber, calculateIMC } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = function (event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    alertError.open();
    return;
  }

  alertError.close();

  const result = calculateIMC(weight, height);
  displaeyResultMessage(result);
};

function displaeyResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.toggle();
}

inputWeight.oninput = () => alertError.close();
inputHeight.oninput = () => alertError.close();