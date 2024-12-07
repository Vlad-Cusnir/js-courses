console.log('Turtle race!');

const players = [
    new Turtle('Leo'),
    new Turtle('Dona'),
    new Turtle('Miche'),
    new Turtle('Rafa'),
    new Turtle('Fulgy'),
];


document.querySelector('#new-round-btn').addEventListener('click', function(){
    console.log('');
    console.log(` 🎲 New round starts 🎲`);

    // for (let i = 0; i < players.length; i++) {
    //     players[i].changeScore();
    //     console.log(`${players[i].name} rolled ${players[i].diceRoll}. Current score: ${players[i].score}`);
    // }

    players.forEach(p => {
        p.changeScore()
        console.log(`${p.name} rolled ${p.diceRoll}. Current score: ${p.score}`);
    });
})
