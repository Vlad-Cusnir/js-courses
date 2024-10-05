console.log('utils.js loaded..');


function promptForNumber(msg = 'Input a number'){
    let nr = prompt(msg);
    return Number(nr);
}


function promptForGenericArray(msgForLength = 'How many elements will the array have?', msgforElement = 'Input the element'){
    let arrLength = prompt(msgForLength);
    arrLength = Number(arrLength);

    const arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = prompt(`${msgforElement} ${i + 1}`);
    }

    return arr;
}


function promptForNumbersArray(msgForLength = 'How many elements will the array have?', msgforElement = 'Input the element'){
    let arrLength = prompt(msgForLength);
    arrLength = Number(arrLength);

    const arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = promptForNumber(`${msgforElement} ${i + 1}`);
    }

    return arr;
}