console.log(`The user inputs a value, the program displays if it's odd or even`);

let userNr = prompt('Input a number');
userNr = Number(userNr);

/*
if(userNr % 2 == 0){
    alert('The number is even');
}
else{
    alert('The number is odd');
}
*/

const msg = userNr % 2 == 0 ? 'The number is even' : 'The number is odd';
alert(msg);