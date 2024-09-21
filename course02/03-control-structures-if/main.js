console.log('display the absolute value of a given number');


let userNr = prompt('Input a number: ');
userNr = Number(userNr);

if(userNr < 0){
    userNr = -userNr;
}

alert(`The absolute value is ${userNr}`);
