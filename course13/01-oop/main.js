console.log('Turtle race!');

const players = [
    new NinjaTurtle('Leo', 'blue', 'Katana swords'),
    new Turtle('Dona'),
    new Turtle('Miche'),
    new Turtle('Rafa'),
    new Turtle('Fulgy'),
];


document.querySelector('#new-round-btn').addEventListener('click', function(){
    console.log('');
    console.log(` 🎲 New round starts 🎲`);
    players.forEach(p => {
        p.changeScore()
        console.log(`${p.name} rolled ${p.diceRoll}. Current score: ${p.getScore()}`);
    });
})
