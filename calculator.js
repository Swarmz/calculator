///////////         CURRENT LOGIC       //////////////
/*  Numbers are added to the array num2
    upon an operation button press num2 array is moved into num1 array
    the second set of input received is moved into num2 array
    upon pressing equals both arrays join() and the result is displayed as a number
*/

// display and store into num variables
const displayNumber = function() {
    let buttonValue = this.textContent;
    displaySection.textContent = displaySection.textContent.concat(buttonValue);
    num2.push(buttonValue);
}

// display and store into operand variable
const displayOperator = function() {
    let buttonValue = this.textContent;
    displaySection.textContent = buttonValue;
    operand = buttonValue;
    if (num1.length === 0) {num1 = num2;} // passes to num1 on first calculation, 2nd operation and on will already have num1 value
    num2 = []; // reset num2 for new input
}

// called when equals is pressed
const calculate = function() {
    num2 = parseInt(num2.join(""));
    num1 = parseInt(num1.join(""));
    operate([num1, num2], operand);
    num1 = Array.from(String(num1)); // need to return to an array for further operations *see bottom for further info
}

// sets display blank
const clearButton = function() {
    document.getElementById("display-numbers").textContent = "";
    num1 = [];
    num2 = [];
    operand = undefined;
}

const add = function(a,b) {
    num1 = a+b;
    displaySection.textContent = num1;
};
  
const subtract = function(a,b) {
    num1 = a-b;
    displaySection.textContent = num1;
};
  
const multiply = function(a,b) {
    num1 = a*b;
    displaySection.textContent = num1;
};

const divide = function(a,b) {
    num1 = a/b;
    displaySection.textContent = num1;
};

const operate = function([num1,num2],operand) {
    switch (operand) {
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case 'x':
            multiply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
        default:
            displaySection.textContent = 'error';
    }
};

// gives the numbered buttons their onclick functionality
document.querySelectorAll(".number-button").forEach(function(button){
    button.addEventListener("click", displayNumber);
});

// gives the operator buttons their onclick functionality
document.querySelectorAll(".operator-button").forEach(function(button){
    button.addEventListener("click", displayOperator);
});

document.getElementById('equals').addEventListener("click", calculate);

document.getElementById("clear").addEventListener("click", clearButton);


let displaySection = document.getElementById("display-numbers");
let num1 = [];
let num2 = [];
let operand; // can be assigned the values 'addition', 'subtraction', 'multiplication', 'division'


// * num1 = Array.from(String(num1), Number);
// * this was the original operation but ran into problems when converting a negative string back into a negative number, the '-' string was assigned NaN in the new array


