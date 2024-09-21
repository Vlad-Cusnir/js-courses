console.log('main.js is loaded..');

let userName = prompt('What is your name?');
alert('Hello, ' + userName + '!');
console.log(`Hello, ${userName}!`);

let nr1 = prompt('Input a number: ');
nr1 = Number(nr1);

let nr2 = prompt('Input another number: ');
nr2 = Number(nr2);

let prod = nr1 * nr2;

alert(`Product is: ${prod}`);