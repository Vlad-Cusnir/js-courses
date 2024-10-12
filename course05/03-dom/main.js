console.log('The DOM');

// finds THE FIRST element in the DOM, corresponding to the css selector
// it stores a reference of THE FIRST paragraph in the DOM
const elem = document.querySelector('p');
console.log(elem);

// finds ALL element in the DOM, corresponding to the css selector
// it stores a reference of a NodeList containing ALL the paragraphs in the DOM
const elemList = document.querySelectorAll('p');
console.log(elemList);

// get the text written in the textbox
const inputElem = document.querySelector('input');
console.log(inputElem.value);
console.log(inputElem.getAttribute('value'));

// adding a 'click' event listener on button
const btnElem = document.querySelector('button');
btnElem.addEventListener('click', function(){
    alert(`Hello ${inputElem.value}`);
});