///////////         CURRENT LOGIC       //////////////
/*  First number is assigned to the array num2
    upon an operation button press num2 array is moved into num1 array
    the second number received is assigned to num2 array
    upon pressing equals both arrays join() and the result is displayed as a number
*/

// display and store into num variables
const displayNumber = function() {
    let buttonValue = this.textContent;
    displaySection.textContent = displaySection.textContent.concat(buttonValue);
    num2.push(buttonValue);
}

// display and store into operator variable
const displayOperator = function() {
    let buttonValue = this.textContent;
    displaySection.textContent = ' ' + buttonValue + ' ';
    if (num1.length === 0) {num1 = num2, num2 = [];} // passes to num1 on first calculation, 2nd operation and on will already have num1 value 
    else calculate(); operator = buttonValue; displaySection.textContent = parseInt(num1.join("")) + ' ' + operator + ' '; // allows multiple operations in a row
}

// called when equals is pressed
const calculate = function() {
    if (num1.length && num2.length !== 0){
        num2 = parseInt(num2.join(""));
        num1 = parseInt(num1.join(""));
        operate([num1, num2], operator);
        num2 = []; // reset num2 for new input
        num1 = Array.from(String(num1)); // need to return to an array for further operations *see bottom for further info
    } else; // prevent operations happening without two numbers
}


// sets display blank
const clearButton = function() {
    document.getElementById("display-numbers").textContent = "";
    num1 = [];
    num2 = [];
    operator = undefined;
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
    if (b !== 0) {num1 = a/b;
    displaySection.textContent = num1;}
    else clearButton(), displaySection.textContent = "Nice Try :)";
};

const operate = function([num1,num2],operator) {
    switch (operator) {
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
let operator; // can be assigned the values 'addition', 'subtraction', 'multiplication', 'division'


// * num1 = Array.from(String(num1), Number);
// * this was the original operation but ran into problems when converting a negative string back into a negative number, the '-' string was assigned NaN in the new array


