console.log('Object literals in JS');

const person1 = {
    name: 'John Doe',
    age: 30,
    address: '123 Main Street',
    greet: function () {
        console.log('Hello, my name is ' + this.name);
        console.log('Nice to meet you!');
    },
    leave: function () {
        console.log(this.name + ' left the building!');
    }
};


const person2 = {
    name: 'Jane Doe',
    age: 35,
    address: '123 Main Street',
    greet: function () {
        console.log('Hi, my name is ' + this.name);
    },
    leave: function () {
        console.log(this.name + ' left the building!');
    }
};


function personFactory(name, age, address) {
    return {
        name: name,
        age: age,
        address: address,
        greet: function () {
            console.log('Hi, my name is ' + this.name);
        },
        leave: function () {
            console.log(this.name + ' left the building!');
        }
    }
}

const p1 = personFactory('Ion Pop', 27, 'Str. Lunga');
const p2 = personFactory('Maria Popa', 18, 'Str. Larga');