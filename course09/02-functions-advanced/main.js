console.log('main.js loaded...');

/**
 * functions in JS are "special"
 */
function commonFunction() {
    console.log('This is a "classic" function in JS');
}


const testFunction = function () {
    console.log('This is just fine in JS');
}

// setTimeout(testFunction, 2000);


/**
 * functions in JS using DOM
 */
// document.querySelector('#add1')
//     .addEventListener('click', testFunction);


let counter = 0;

const modifyCounter = function (amount) {
    counter += amount;
    console.log(`Counter is now ${counter}`)
}

document.querySelector('#add1')
    .addEventListener('click', () => modifyCounter(1));

document.querySelector('#add5')
    .addEventListener('click', () => modifyCounter(5));