class NinjaTurtle extends Turtle{

    constructor(name, color, weapons, battleCry = 'Kawabunga'){
        super(name); // calls the constructor od the inherited class
        this.color = color;
        this.weapons = weapons;
        this.battleCry = battleCry;
    }


    shoutBattleCry(){
        console.log(`${this.name} shouts: "${this.battleCry}!"`);
    }


    changeScore(diceSides = 6){
        console.log('change score for a TMNT!');
        const sign = Math.random() > 0.5 ? 1 : -1;
        this.diceRoll = (Math.floor(Math.random() * diceSides) + 1) * sign;
        this.changeScoreByAmount(this.diceRoll);
    }
}