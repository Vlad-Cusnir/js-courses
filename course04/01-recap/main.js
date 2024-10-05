console.log('Random student picker');


let studentsNr = prompt('How many students are attending: ');
studentsNr = Number(studentsNr);

let students = [];

for (let i = 0; i < studentsNr; i++) {
    // let newStudent = prompt(`Input the name of student ${i}: `)
    // students.push(newStudent);

    students[i] = prompt(`Input the name of student ${i + 1}: `);
}

console.log(students);

const randomIndex = Math.floor(Math.random() * students.length);
alert(`The chosen one is: ${students[randomIndex]}`)
