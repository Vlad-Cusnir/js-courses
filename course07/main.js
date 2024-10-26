"use strict";

const url = 'http://localhost:3000/films';

fetch(url)
  .then((res) => res.json())
  .then(createFilmsList);

  /*
    function(res) {
      return res.json();
    }

    este echivalenta cu

    (res) => res.json()

  */

function createFilmsList(data) {
  const list = document.createElement('ul');

  for(const film of data) {
    const listItem = document.createElement('li');
    list.append(listItem);
    listItem.textContent = film.title;
  }

  document.body.append(list);

  return data;
}

document.querySelector('[data-update-film]').addEventListener(
  'click',
  updateOneFilm
);

function updateOneFilm() {
  fetch('http://localhost:3000/films/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'Paul' + Math.random() }),
  })
    .then((res) => res.json())
    .then(console.log);
  // fetch('http://localhost:3000/films/' + film.id)
}




/*
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
  }

  e echivalent cu

  for(const elem of arr) {
  }
*/
