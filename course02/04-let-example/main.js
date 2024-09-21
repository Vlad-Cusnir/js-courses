console.log('The power of let..');
console.log('Read 2 numbers, interchange them if the order is not ascending');

let nr1 = prompt('Input the first value');
nr1 = Number(nr1);

let nr2 = prompt('Input the second value');
nr2 = Number(nr2);

if(nr2 < nr1){
    let aux = nr1;
    nr1 = nr2;
    nr2 = aux;
}

alert(`The numbers in ascending order: ${nr1}, ${nr2}`);