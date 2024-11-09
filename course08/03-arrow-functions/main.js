console.log('arrow functions');

// function sum(a, b){
//     console.log(`Sum is: ${a + b}`);
//     return a + b;
// }

// const sum = function(a, b){
//     console.log(`Sum is: ${a + b}`);
//     return a + b;
// }

const sum = (a, b) => {
    console.log(`Sum is: ${a + b}`);
    return a + b;
}

sum(3, 5);


// function sumShort(a, b){
//     return a + b;
// }

const sumShort = (a, b) => a + b;


// function next(a){
//     return a + 1;
// }

const next = a => a + 1;


// function random(){
//     return Math.floor(Math.random() * 6) + 1;
// }

const random = () => Math.floor(Math.random() * 6) + 1;
