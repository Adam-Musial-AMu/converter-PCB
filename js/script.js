{
    const welcome = () => {
        console.log("Witam w moim formularzu kalkulacyjnym PCB");
    }

    const calculateResult = (length, width, quantity, radio1Element, option1Element) => {
        return length * width * quantity * (radio1Element.checked ? 0.01 : 0.02) * (option1Element.selected ? 1 : 4);
    }

    const updateResultText = (result) => {
        const finalResultElement = document.querySelector(".js-finalResult");
        finalResultElement.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const option1Element = document.querySelector(".js-option1");
        const radio1Element = document.querySelector(".js-radio1");
        const lengthElement = document.querySelector(".js-length");
        const widthElement = document.querySelector(".js-width");
        const quantityElement = document.querySelector(".js-quantity");
        const length = lengthElement.value;
        const width = widthElement.value;
        const quantity = quantityElement.value;

        const result = calculateResult(length, width, quantity, radio1Element, option1Element);

        updateResultText(result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

        welcome();
    }
    init();

}

