console.log('Async JS!');

console.log('Before request!')

// fetch the joke
// fetch(`https://api.chucknorris.io/jokes/random`)
//     .then(function (response) {
//         return response.json(); // Parse the response as JSON
//     })
//     .then(function (data) {
//         console.log(data)    // Handle the data you get from the response
//     })

for (let i = 0; i < 10000; i++) {
    console.log(i);
}

// setTimeout(function(){
//     console.log('executing code from first timeout');   
// }, 1000)


// setTimeout(function(){
//     console.log('executing code from first timeout');   
// }, 0)

// let counter = 0;

// const intervalId = setInterval(function(){
//     counter++
//     console.log(`counter: ${counter}`);  
    
//     if(counter == 5){
//         console.log('clearing interval');
//         clearInterval(intervalId);
//     }
// }, 1000)


console.log('After request!')

console.log('main.js code finished!');