let numbersBtnHTML = document.getElementsByClassName("number");

let numbersBtnArray = Array.from(numbersBtnHTML);

let inputField = document.getElementById("input");

let numbersHTML = document.getElementsByClassName("numero");

let numbersArray = Array.from(numbersHTML);

let calcBtn = document.getElementById("calc");

let resetBtn = document.getElementById("reset");

let multiplierNumbers = document.getElementsByClassName("multiplicador");

const multiplierNumbersArray = Array.from(multiplierNumbers);

let resultNumbersField = document.getElementsByClassName("resultado");

const resultNumbersFieldArray = Array.from(resultNumbersField);

numbersBtnArray.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
        inputField.value += numberBtn.innerText;
    });
});

calcBtn.addEventListener("click", () => {
    let inputFieldValue = inputField.value;
    let number = 0;

    numbersArray.forEach((numberField) =>{
        numberField.innerText = `${inputFieldValue}`;
    });

    multiplierNumbersArray.forEach((multiplier) =>{
        number++;
        multiplier.innerText = `${number}`;
    });

    number=0;

    resultNumbersFieldArray.forEach((resultNumberField)=>{
        number++;
        let result = eval(`${number}*${inputFieldValue}`);
        resultNumberField.innerText = result;
    });
});

resetBtn.addEventListener("click", () =>{
    inputField.value = "";
});
