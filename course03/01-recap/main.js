console.log('course 03 recap');

console.log('sum of any number of values given by the user');

let totalValues = prompt('How many values do you want to add: ');
totalValues = Number(totalValues);

let sum = 0;
for (let i = 0; i < totalValues; i++) {
    let userNr = prompt('Input a number');
    userNr = Number(userNr);
    
    sum = sum + userNr;
    // sum += userNr;
}

alert(`The sum is: ${sum}`);