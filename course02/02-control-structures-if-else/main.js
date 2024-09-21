console.log('About decisional structures');

let userNr = prompt('Input a number: ');
userNr = Number(userNr);

debugger;

if(userNr >= 0){
    // executed when condition is true
    alert('The number is positive or zero');
    console.log('user provided a positive value');
}
else {
    // executed when condition is false
    alert('The number is negative');
    console.log('user provided a negative value');
}

console.log('End of the program');
