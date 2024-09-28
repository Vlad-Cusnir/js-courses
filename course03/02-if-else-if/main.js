console.log('if-else-if');

console.log('the user specifies his age, the program displays if he is a child, teenager, adult, extra adult, extra crispy');

// 0 -  12 => child
// 13 -  17 => teeneager
// 18 -  70 => adult
// 71 -  80 => extra adult
// 81 and on => extra crispy

let userAge = prompt('Input your age');
userAge = Number(userAge);

// if(userAge <= 12){
//     alert('You are a child');
// }
// else{
//     if(userAge <= 17){
//         alert('You are a teenager');
//     }
//     else{
//         if(userAge <= 70){
//             alert('You are an adult');
//         }
//         else{
//             if(userAge <= 80){
//                 alert('You are an extra adult')
//             }
//             else{
//                 alert('You are extra crispy')
//             }
//         }
//     }
// }


if(userAge <= 12)
    alert('You are a child');
else if(userAge <= 17)
    alert('You are a teenager');
else if(userAge <= 70)
    alert('You are an adult');
else if(userAge <= 80)
    alert('You are an extra adult');
else
    alert('You are extra crispy');