console.log('ternary operator');
console.log('display if a given number is odd or even');

let userNr = prompt('Input a number');
userNr = Number(userNr);

// let msg;
// if(userNr % 2 == 0){
//     msg = 'Number is even';
// }
// else{
//     msg = 'Number is odd';
// }


let msg = userNr % 2 == 0 ? 'Number is even' : 'Number is odd';
alert(msg);