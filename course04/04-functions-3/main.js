function maxInArray(arr){
    // implement the logic
    console.log(arr);

    // return the max value of the given array
    return arr[0];
}


const max = maxInArray([-12, 6, 9, 10]);
console.log(`Max is: ${max}`);



function computerOption(){
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    // it should return rock / paper / scissors
    return options[randomIndex];
}