const frutas = ['maça', 'laranja', 'morango'];
frutas.push('abacate');
frutas.push('mamao');

//array length
console.log('Tamanho do array: ' + frutas.length);
i('primeiro item - indice [0] : ' + frutas[0]);
i('ultimo item : ' + frutas[frutas.length - 1]);

//forEach examplo
i('inicio do forEach');
i(' ');
frutas.forEach( function (item, indice, array) {
    i(item + ' ' + indice + ' ' + array);
} );
i(' ');
i('fim do forEach');

//remove o ultimo item do array
frutas.pop();
i(frutas);

//remove o primeiro item do array
frutas.shift();
i(frutas);

//adiciona no inicio
frutas.unshift('pera');
frutas.unshift('uva');
i(frutas);

i('procura indice de um item array.indexOf() ');
i('indice do abacate: ' + frutas.indexOf('abacate'));

frutas.push('limao','pitaia','abacaxi');

frutas.splice(2,3);
let frutas2 = frutas.slice();
i('frutas 2: ' + frutas2);
i(frutas);
i('length: ' + frutas.length);

frutas2[100] = 'banana';
i(Object.keys(frutas2));



i(Array.prototype.reverse(frutas2));

function i(msg) {
    console.log(msg);
}

// Encontra um d seguido por um ou mais b's seguido por um d
// Salva os b's encontrados e o d seguinte
// Ignora caixa (maiúscula/minúscula)

var minhaRegex = /d(b+)(d)/i;
var meuArray = minhaRegex.exec('cdbBdbsbz');
i(meuArray);
i(meuArray.length);

values = [];
for (var x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
};
console.table(values)

i(Array.isArray(values));
i(values.indexOf(16));
