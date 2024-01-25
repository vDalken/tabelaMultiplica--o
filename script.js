let numbersBtnHTML = document.getElementsByClassName("number");

let numbersBtnArray = Array.from(numbersBtnHTML);

let inputField = document.getElementById("input");

let tableRowsHTML = document.getElementsByTagName("tr");

let tableRowsArray = Array.from(tableRowsHTML);

let calcBtn = document.getElementById("calc");

let resetBtn = document.getElementById("reset");

numbersBtnArray.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
        inputField.value += numberBtn.innerText;
    });
});

calcBtn.addEventListener("click", () => {
    let inputFieldValue = inputField.value;
    let number = 0;
    let result = 0;
    tableRowsArray.forEach((tableRow) => {
        number++;
        result = eval(`${inputFieldValue}*${number}`);
        tableRow.innerText = `${inputFieldValue} x ${number} = ${result}`;
    });
});

resetBtn.addEventListener("click", () =>{
    inputField.value = "";
    tableRowsArray.forEach((tableRow) =>{
        tableRow.innerText="";
    });
});
