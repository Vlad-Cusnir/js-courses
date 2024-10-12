console.log('Generate random color..');


function generateRandomColor(){
    const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let color = '#';
    for (let i = 0; i < 6; i++) {
        let randomDigitIndex = Math.floor(Math.random() * hexChars.length);
        color = color + hexChars[randomDigitIndex];
    }
    
    return color;
}


function displayColor() {
    const randomColor = generateRandomColor();
    console.log(`Random color: ${randomColor}`);

    const displayElem = document.querySelector('#sample-color');
    displayElem.textContent = randomColor;
    displayElem.style.backgroundColor = randomColor;

    const mainTitleElem = document.querySelector('h1');
    mainTitleElem.style.color = randomColor;
}

displayColor();