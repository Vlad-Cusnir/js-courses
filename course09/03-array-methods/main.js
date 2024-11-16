console.log('array methods in main.js...');

const grades = [4, 10, 5.66, 7.97, 8.12, 10, 3.12];

// // only the grades geater than 5
// const filteredGrades = [];
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] > 5) {
//         filteredGrades.push(grades[i]);
//     }
// }

// console.log(grades);

const filteredGrades = grades.filter(g => g > 5);

// const display = document.querySelector('#display');
// for (let i = 0; i < filteredGrades.length; i++) {
//     const gradeDiv = document.createElement('div');
//     gradeDiv.textContent = filteredGrades[i];
//     display.append(gradeDiv);
// }


filteredGrades.forEach((g, i) => {
    const gradeDiv = document.createElement('div');
    gradeDiv.textContent = `grade ${++i}: ${g}`;
    display.append(gradeDiv);
});