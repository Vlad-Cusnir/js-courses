console.log(`Now i'm sure the js file is loaded..`);


const textBoxElem = document.querySelector('#player-name');
const colorElem = document.querySelector('#player-color');
const btn = document.querySelector('#add-player-btn');
const cardsContainer = document.querySelector('.cards-container');


btn.addEventListener('click', function(){
    if(textBoxElem.value){
        createCard(textBoxElem.value, colorElem.value);
        textBoxElem.value = '';
    }
    else{
        alert('Player should have a name!');
    }
});



function createCard(playerName, playerColor) {
    // console.log(`Should create a card with properties ${playerName}, ${playerColor}`);
    const card = document.createElement('div');
    card.classList.add('card');
    cardsContainer.append(card);
    
    const cardHeading = document.createElement('h2');
    cardHeading.textContent = playerName;
    cardHeading.style.color = playerColor;
    card.append(cardHeading);

    const cardAvatar = document.createElement('img');
    cardAvatar.src = `https://api.dicebear.com/9.x/adventurer/svg?seed=${playerName}`;
    card.append(cardAvatar);

    const scoreText = document.createTextNode('Score: ');
    card.append(scoreText);

    const scoreSpan = document.createElement('span');
    scoreSpan.textContent = '0';
    card.append(scoreSpan);

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');
    card.append(optionsDiv);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = `Delete ${playerName}`;
    optionsDiv.append(deleteBtn);


    deleteBtn.addEventListener('click', function(e){
        console.log('Button was clicked'); 
        // console.log(e);

        const clickedBtn = e.target;
        // console.log(clickedBtn);

        const parentCard = clickedBtn.parentNode.parentNode;
        // console.log(parentCard);

        parentCard.remove();
    });
}

