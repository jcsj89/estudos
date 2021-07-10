const path = require('path');
const escreve = require('./modules/escreve');
const ler = require('./modules/ler');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

/*
const pessoas = [
    { nome: 'Jose' },
    { nome: 'Carlos' },
    { nome: 'Felipe' },
    { nome: 'Isadora' },
    { nome: 'Luana' },
];

const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo,json);
*/

async function leArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);

    dados.forEach(element => {
        console.log(element);
    });
}

leArquivo(caminhoArquivo);

