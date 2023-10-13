// used for display and storing into num variables
const displayNumber = function() {
    let buttonValue = this.textContent;
    displaySection.textContent = displaySection.textContent.concat(buttonValue);
    num1.push(buttonValue);
}

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
    console.log(result); // console logs will be changed to letting the result value appear in the calculator display area
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
        case addition:
            add(num1,num2);
            break;
        case subtraction:
            subtract(num1,num2);
            break;
        case multiplication:
            multiply(num1,num2);
            break;
        case division:
            divide(num1,num2);
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


