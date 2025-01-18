console.log('Defining Turtle class');

class Turtle {
    // private class propery
    #gameScore = 0;

    constructor(name){
        this.name = name;
        this.diceRoll = undefined;
        this.#gameScore = 0;
    }


    changeScore(diceSides = 6){
        console.log('Change score for common turtle!');  
        this.diceRoll = Math.floor(Math.random() * diceSides) + 1;
        this.changeScoreByAmount(this.diceRoll);
    }


    getScore(){
        return this.#gameScore;
    }


    changeScoreByAmount(amount){
        this.#gameScore += amount;
    }


    // get score(){
    //     return this.#gameScore;
    // }


    // setScore(newScore){
    //     this.#gameScore = newScore;
    // }

    // set score(newScore){
    //     this.#gameScore = newScore;
    // }
}