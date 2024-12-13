console.log('OOP in JS');

const counter1 = new ClickCounter('Player 1');
const counter2 = new ClickCounter('Player 2');

document.querySelector('#btn-1').addEventListener('click', () => {
    counter1.increaseClicks();
    displayScore();
});

document.querySelector('#btn-2').addEventListener('click', () => {
    counter2.increaseClicks();
    displayScore();
});


function displayScore(){
    console.log('');
    console.log('=== CURRENT SCORE ===');
    console.log(`${counter1.name}: ${counter1.counter} clicks`);
    console.log(`${counter2.name}: ${counter2.counter} clicks`);
}