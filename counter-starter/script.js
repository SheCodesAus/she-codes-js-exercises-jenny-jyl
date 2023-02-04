// function add(step) {
//     let numberElement = document.getElementById("number");
//     // using innertext not value since value is within brackets, inner text is wht is between the <> </>
//     let number = numberElement.innerText;
//     number = parseInt(number) + step
//     numberElement.innerText = number;
//     console.log("number:", number)
// }

// function divide(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     number = parseInt(number) / step
//     numberElement.innerText = number;
//     console.log("number:", number)
// }

// function multiply(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     number = parseInt(number) * step
//     numberElement.innerText = number;
//     console.log("number:", number)
// }

// calculate

function calculate(opp, step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    // if addition, do addition
    if (opp === 'add') {
        number = parseInt(number) + step
    }
    // if subtract, do subtraction
    else if (opp === 'subtract') {
        number = parseInt(number) - step
    }
    // if multiply, do multiplication
    else if (opp === 'multiply') {
        number = parseInt(number) * step
    }
    // if divide, do division
    else if (opp === 'divide') {
        number = parseInt(number) / step
    }

    numberElement.innerText = number;
}

