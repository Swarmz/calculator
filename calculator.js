// display and store into num variables
const displayNumber = function() {
    let buttonValue = this.textContent;
    displaySection.textContent = displaySection.textContent.concat(buttonValue);
    num1.push(buttonValue);
}

// display and store into operand variable
const displayOperator = function() {
    let buttonValue = this.textContent;
    displaySection.textContent = buttonValue;
    operand = buttonValue;
}

// gives the numbered buttons their onclick functionality
document.querySelectorAll(".number-button").forEach(function(button){
    button.addEventListener("click", displayNumber);
});

document.querySelectorAll(".operator-button").forEach(function(button){
    button.addEventListener("click", displayOperator);
});

let displaySection = document.getElementById("display-numbers");

const add = function(a,b) {
    let result = a+b;
    console.log(result); // change this to appear in the calculator display area when ready
};
  
const subtract = function(a,b) {
    let result = a-b;
    console.log(result);
};
  
const multiply = function(a,b) {
    let result = a*b;
    console.log(result);
};

const divide = function(a,b) {
    let result = a/b;
    console.log(result);
};

let num1 = [];
let num2 = [];
let operand; // can be assigned the values 'addition', 'subtraction', 'multiplication', 'division'

// assign the button presses to the correct variable
const variableAssignment = function() {
    
}

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
            console.log("error");
    }
};

// sets display blank
const clearButton = function() {
    document.getElementById("display-numbers").textContent = "";
    num1 = [];
    num2 = [];
    operand = undefined;
}

document.getElementById("clear").addEventListener("click", function(){clearButton()});


