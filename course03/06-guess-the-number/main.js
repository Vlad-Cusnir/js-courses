console.log('guess the number');

// GAME SETTINGS
const maxRandomNumber = 10;
const maxTries = 3;

// GAME IMPLEMENTATION
let randomNumber = Math.floor(Math.random() * maxRandomNumber) + 1; // generates a number 1 or 2 or 3
console.log(randomNumber);

let tries = 0;
let userNumber;
do {
    userNumber = prompt(`Guess a number between 1 and ${maxRandomNumber}`);
    userNumber = Number(userNumber);

    tries++;
} while (userNumber != randomNumber && tries < maxTries);

let msg = userNumber === randomNumber ? `Congrats! You guessed the number in ${tries} tries!` : `You lost, the number was ${randomNumber}`;

alert(msg);