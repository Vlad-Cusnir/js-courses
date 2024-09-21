console.log(`The user specifies a number. The program counts from 0 to the specified number in one single output!`);

let userNumber = prompt('Input a number');
userNumber = Number(userNumber);

// debugger;

let output = '';
for (let i = 0; i <= userNumber; i++) {
    output = output + i + ', ';
}

alert(output);