import { makeIcecream } from "./icecream-machine.js";

//$flavors toma los elementos del html
const $flavors = document.querySelectorAll(".flavor");
//console.log($flavors);
$flavors.forEach(($el) => $el.addEventListener("click", selectFlavor));
function selectFlavor() {
  this.classList.toggle("is-active");
}

window.btn.addEventListener("click", () => {
  const $flavors = document.querySelectorAll(".flavor.is-active");
  console.log($flavors);
  try {
    makeIcecream($flavors[0], $flavors[1]);
  } catch (error) {
    alert("Aun no completas los sabores para preparar tu helado");
  }
});