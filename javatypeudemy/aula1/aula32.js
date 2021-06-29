let a = 'A';
let b = 'B';
let c = 'C';

console.log(a,b,c);

[a, b, c] = [1, 2, 3];

console.log(a,b,c);

const numeros = [100, 200, 300, 400, 500, 6, 7, 8, 9];
const [um,,, dois,, tres, ...rest] = numeros;
console.log(um,dois,tres);
console.log(rest); 

const lista = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const listap = lista[2][5];
const [,[,d]] = lista;

console.log(d)


