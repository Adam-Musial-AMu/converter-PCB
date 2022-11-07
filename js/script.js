console.log("Witam w moim formularzu kalkulacyjnym PCB")

let lengthElement = document.querySelector(".js-length");
let widthElement = document.querySelector(".js-width");
let quantityElement = document.querySelector(".js-quantity");
let formElement = document.querySelector(".js-form");
let finalResultElement = document.querySelector(".js-finalResult");
let radio1Element = document.querySelector(".js-radio1");
let option1Element = document.querySelector(".js-option1");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let length = lengthElement.value;
    let width = widthElement.value;
    let quantity = quantityElement.value;

    result = length * width * quantity * (radio1Element.checked ? 0.01 : 0.02)

    finalResult = result * (option1Element.selected ? 1 : 4)

    finalResultElement.innerText = finalResult.toFixed(2);
});

