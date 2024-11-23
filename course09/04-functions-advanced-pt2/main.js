console.log('main.js loaded again...');

// function testFunction(){
//     const message = 'Hello';
//     console.log(message);

//     return function(){
//         console.log('Returned function running');
//     }
// }


// const wtf = testFunction()
// wtf()

let counter = 0;

function counterHandler (amount){
    return function () {
        counter += amount;
        console.log(`Counter is now ${counter}`)
    }
}

document.querySelector('#add1')
    .addEventListener('click', counterHandler(1));

document.querySelector('#add5')
    .addEventListener('click', counterHandler(5));