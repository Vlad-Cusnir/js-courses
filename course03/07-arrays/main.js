console.log('Arrays in JS!');

// debugger

// input values in an array
let gradesNumber = prompt('How many grades does the student have?');
gradesNumber = Number(gradesNumber);

let grades = [];
for (let i = 0; i < gradesNumber; i++) {
    grades[i] = prompt('Input a new grade');
    grades[i] = Number(grades[i]);
}

// display each element of an array
for (let i = 0; i < grades.length; i++) {
    alert(grades[i]);
}

// display tyhe elements in the console
console.log(grades);