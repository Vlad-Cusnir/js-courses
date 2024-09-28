console.log('the switch statement');

let nr1 = prompt('Input the first number');
nr1 = Number(nr1);

let nr2 = prompt('Input the second number');
nr2 = Number(nr2);


let operationSign = prompt('Input the operation (+, -, *, /): ');

console.log(nr1, nr2, operationSign);

// if (operationSign === '+')
//     result = nr1 + nr2;
// else if (operationSign === '-')
//     result = nr1 - nr2;
// else if (operationSign === '*')
//     result = nr1 * nr2;
// else if (operationSign === '/')
//     result = nr1 / nr2;
// else
//     result = '';

let result;  // result is undefined!!!
switch (operationSign) {
    case '+':
        result = nr1 + nr2;     // result becomes number
        break;

    case '-':
        result = nr1 - nr2;     // result becomes number
        break;

    case '*':
        result = nr1 * nr2;     // result becomes number
        break;

    case '/':
        result = nr1 / nr2;     // result becomes number
        break;
}

if (typeof result === 'undefined') {
    alert('Input data was invalid')
}
else {
    alert(`${nr1} ${operationSign} ${nr2} = ${result}`);
}