console.log('main.js loaded again...');

let counter = 0;

(function changeCounter(amount){
    counter += amount;
    console.log(`Counter is now: ${counter}`);
})(15)

// changeCounter(15);