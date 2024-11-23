const promiseDelayedNumber = new Promise((resolve, reject) => {
    // setTimeout(() => resolve({message: 'Success', value: 3.14}), 2000);
    setTimeout(() => reject('Time is up..'), 2000);
});

promiseDelayedNumber
     .then(response => console.warn(response))
     .catch(error => console.error(error));



// console.log(`before call`);
// fetch('https://api.chucknorris11.io/jokes/random?category=test')
//     .then(response => console.log(response))
//     .catch(error => console.log(error));
// console.log(`after call`);