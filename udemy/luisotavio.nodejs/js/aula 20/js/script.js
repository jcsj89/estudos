function salvaForma(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.res');
    const pessoas = [];

    function recebeEvento(e){
        e.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const idade = form.querySelector('.idade');

        function criaPessoa(name='jose', lastName='santana', age='31', hight='190'){
            return {
                name,lastName,hight,age
            }
        }       

        pessoas.push(criaPessoa(nome.value,sobrenome.value,altura.value,idade.value));
        resultado.querySelector('.aqui').innerHTML += `Nome: ${pessoas[pessoas.length-1].name}<br>
        Sobrenome: ${pessoas[pessoas.length-1].lastName}<br>
        Altura: ${pessoas[pessoas.length-1].hight}<br>
        Idade: ${pessoas[pessoas.length-1].age}<br><br>
        `
        i(pessoas);
    }

    form.addEventListener('submit', recebeEvento);
};
salvaForma();

function i(msg){
    console.log(msg);
};
