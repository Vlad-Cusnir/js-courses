const display = document.querySelector('#display');


function getCategories(displayCallback){
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(categories => displayCallback(categories))
        .catch(data => console.log(data))
}


function displayAsList(categories) {
    console.log(categories);
    const categoryList = document.createElement('ol');
    display.append(categoryList);

    categories.forEach(categoryName => {
        const categoryListElement = document.createElement('li');
        categoryListElement.textContent = categoryName;
        categoryList.append(categoryListElement);
    });
}


function displayAsDropdown(categories) {
    console.log(categories);
    const categoryDropdown = document.createElement('select');
    display.append(categoryDropdown);

    categories.forEach(categoryName => {
        const categoryOption = document.createElement('option');
        categoryOption.value = categoryName;
        categoryOption.textContent = categoryName;
        categoryDropdown.append(categoryOption);
    });
}


getCategories(displayAsDropdown);