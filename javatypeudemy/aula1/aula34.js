const elementos = [
    {tag: 'p', texto: 'texto 1'},
    {tag: 'div', texto: 'div 1'},
    {tag: 'section', texto: 'section 1'},
    {tag: 'footer', texto: 'footer 1'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];
    let tagcriada = document.createElement(tag);
    tagcriada.innert = texto;
    div.appendChild(tagcriada);
}

container.appendChild(div);
