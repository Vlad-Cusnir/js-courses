console.log('Defining Turtle class');

class Turtle {
    constructor(name){
        this.name = name;
        this.diceRoll;
        this.score = 0;
    }

    changeScore(){
        this.diceRoll = Math.floor(Math.random() * 6) + 1;
        this.score += this.diceRoll; 
    }
}