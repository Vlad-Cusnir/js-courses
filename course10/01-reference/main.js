console.log('main.js running!');

// let nr1 = 10;
// let nr2 = nr1;
// console.log(nr1, nr2);

// nr2 = 5;
// console.log(nr1, nr2);


const p1 = {
    name: 'Ada',
    age: 41
}

const p2 = {...p1};
console.log(p1);
console.log(p2);

p2.age = 35;
console.log(p1);
console.log(p2);

// const exchangeRate = 4.9864;
// exchangeRate = 5;

const grades = [6, 8, 10, 7];
const copyGrades = [...grades];
copyGrades.push(9);

console.log(grades);
console.log(copyGrades);


