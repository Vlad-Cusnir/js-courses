// let clicks = 0; 
// const couterName = 'Player 1 counter';

// function increaseClicks() {
//     clicks++;
//     console.log(clicks);
// }


class ClickCounter {
    constructor(counterName){
        this.name = counterName;
        this.counter = 0;
    }

    increaseClicks(){
        this.counter++;
        // console.log(`${this.name} clicks: ${this.counter}`);
    }

    decreaseClicks(){
        this.counter--;
        // console.log(`${this.name} clicks: ${this.counter}`);
    }
}