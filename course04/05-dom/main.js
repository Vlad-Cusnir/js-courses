console.log('The DOM');

const displaySpan = document.querySelector('.container > div > span');
console.log(displaySpan);

let clickCounter = 0;

function newClick(){
    clickCounter++;
    displaySpan.innerText = clickCounter;
}
