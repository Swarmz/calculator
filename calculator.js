const add = function(a,b) {
    let result = a+b;
    console.log(result);
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

const num1 = button.value;
const num2 = button.value;
const displayOperator = button.value;

const operate = function([a,b],operator) {
    switch (operator) {
        case addition:
            add(a,b);
            break;
        case subtraction:
            subtract(a,b);
            break;
        case multiplication:
            multiply(a,b);
            break;
        case division:
            divide(a,b);
    }
};

