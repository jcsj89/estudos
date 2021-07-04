falaOi();

function falaOi() {
    console.log('oi');
}

function nova(){

}

// Expression Function
const nome = function (){
    console.log('sou um dado');
};

nome();

function executaFuncao(funcao){
    console.log('funcao abaxip');
    funcao();
};
executaFuncao(nome);

// Arrow Function
const funcaoArrow = (name) => {
    console.log(name);
};

executaFuncao(funcaoArrow);

const obj = {
    falar(){
        console.log('oi');
    }
}
obj.falar();

