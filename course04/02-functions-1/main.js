console.log('Random student picker');


let studentsNr = prompt('How many students are attending: ');
studentsNr = Number(studentsNr);

let students = [];

for (let i = 0; i < studentsNr; i++) {
    students[i] = prompt(`Input the name of student ${i + 1}: `);
}

console.log(students);

// function declaration - the code will not execute!!
function pickStudent(){
    const randomIndex = Math.floor(Math.random() * students.length);
    alert(`The chosen one is: ${students[randomIndex]}`);
    console.log(students[randomIndex]);
}
