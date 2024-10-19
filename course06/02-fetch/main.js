console.log('using fetch!');


// async function getData() {
//     const url = "http://demo-api.siit.ro/api/authors";
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         }

//         const json = await response.json();
//         // handle request
//         console.log(json);
//         // end handle request
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// getData();

const authorsContainer = document.querySelector('#authors');

const requestUrl = `http://demo-api.siit.ro/api/authors`;
fetch(requestUrl)
    .then(response => response.json())
    .then(function(data){
        // code to be implemented upon receiving the response!
        // data will contain the response parsed as JS object literal!
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            const authorDiv = document.createElement('div');
            authorDiv.textContent = data[i].name;
            authorsContainer.append(authorDiv);
        }
    });
