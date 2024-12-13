console.log('Promises, part 2');

const supplier1 = new Promise((resolve, reject) => {
    console.log('Price checking initiated...');
    setTimeout(() => {
        const randomPrice = Math.random() * 100 ;
        console.log(`The price request is successfull: ${randomPrice}!`);
        resolve({
            supplier: 'Supplier 1',
            price: randomPrice
        });

        // console.log(`The promise is rejected !!!`);
        // reject({
        //     message: `Unable to calculate stock`,
        //     code: 546
        // });
    }, 2000)
});


const supplier2 = new Promise((resolve, reject) => {
    console.log('Price checking initiated...');
    setTimeout(() => {
        const randomPrice = Math.random() * 100 ;
        console.log(`The price request is successfull: ${randomPrice}!`);
        resolve({
            supplier: 'Supplier 2',
            price: randomPrice
        });

        // console.log(`The promise is rejected !!!`);
        // reject({
        //     message: `Unable to calculate stock`,
        //     code: 546
        // });
    }, 3000)
});


const supplier3 = new Promise((resolve, reject) => {
    console.log('Price checking initiated...');
    setTimeout(() => {
        const randomPrice = Math.random() * 100 ;
        console.log(`The price request is successfull: ${randomPrice}!`);
        resolve({
            supplier: 'Supplier 3',
            price: randomPrice
        });

        // console.log(`The promise is rejected !!!`);
        // reject({
        //     message: `Unable to calculate stock`,
        //     code: 546
        // });
    }, 1500)
});


Promise.all([supplier1, supplier2, supplier3])
    .then(values => {
        console.log(values);
        let bestOffer = values[0];

        for (let i = 1; i < values.length; i++) {
            if(values[i].price < bestOffer.price){
                bestOffer = values[i];
            }
        }

        console.log(bestOffer);
    })