console.log('logical operators');

console.log('prompt the user to input one of the values +, -, * , /');

let operationSign;
do {
    operationSign = prompt('Input an operation sign (+, -, *, /)');
} while (operationSign != '+' && operationSign != '-' && operationSign != '*'  && operationSign != '/');


alert(`Chosen operation: ${operationSign}`);
