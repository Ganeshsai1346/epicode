/** @format */

const checkBoxEnable = document.getElementById("checkBox");
const buttonProceed = document.getElementById("btn");
function enable() {
  if (checkBoxEnable.checked) {
    buttonProceed.removeAttribute("disabled");
  } else {
    buttonProceed.disabled = "true";
  }
}
