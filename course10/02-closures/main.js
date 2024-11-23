console.log('Closures');

function createCounter(counterName, startValue = 0){
    console.log(`Creating counter ${counterName} with initial value ${startValue}`);
    
    let counter = startValue;

    return function(){
        console.log(`${counterName} score: ${++counter}`);
    }
}

const counter1 = createCounter('Adi', 10);
const counter2 = createCounter('JS');

const buttons = document.querySelectorAll('button')
console.log(buttons);

buttons[0].addEventListener('click', () => {
    counter1()
});

buttons[1].addEventListener('click', () => {
    counter2()
});