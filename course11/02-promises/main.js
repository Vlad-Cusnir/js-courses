console.log('Promises, part 2');

const stockPromise = new Promise((resolve, reject) => {
    console.log('Stock checking initiated...');
    setTimeout(() => {
        const randomNr = Math.floor(Math.random() * 11);
        console.log(`The stock request is successfull: ${randomNr}!`);
        resolve({
            product: 'Shoes',
            stock: randomNr
        });

        // console.log(`The promise is rejected !!!`);
        // reject({
        //     message: `Unable to calculate stock`,
        //     code: 546
        // });
    }, 2000)
});

stockPromise
    .then(data => {
        console.log('Stock value was received (promise was fulfilled!).');
        console.log(data);
        if (data.stock > 0) {
            return data.stock
        }

        throw new Error('Stock does not allow a new order');
    })
    .then(() => placeOrder())
    .then(data => {
        console.log(data);
        console.log('Order registration sucessfully completed');
    })
    .catch(err => console.error(err))

//
const placeOrder = function(){
    const orderPromise = new Promise((resolve, reject) => {
        console.log('Order registration started...');
        setTimeout(() => {
            // promise fulfilled
            resolve({
                message: 'Order is placed',
                orderId: 7878
            })
    
            // promise rejected
            // reject('Order registration encounterd an error!')
        }, 1000)
    });

    return orderPromise
}