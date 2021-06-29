const person = {
    name: 'Jose',
    lastName: 'Santana',
    age: 31,
    address: {
        street: 'rua padres',
        num: 455
    }
}

const { 
    name, lastName, 
    address: {num} } = person;

    
console.log(name,num);