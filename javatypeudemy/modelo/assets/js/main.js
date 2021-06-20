function i(msg) {
    console.log(msg);
}

const imc = function (peso, altura) {
    return peso / (altura * altura / 10000);
};

function responde(e) {
    e.preventDefault();
    const form = document.querySelector('#form');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const resp = document.querySelector('#resp');
    const valPeso = parseInt(peso.value);
    const valAltura = parseInt(altura.value);
    
    const calc = imc(valPeso, valAltura);

    if( calc > 0 ){
       if ( calc <= 18.5 ){
        resp.innerHTML = `IMC: ${ calc.toFixed(2) } -- Voce está abaixo do peso`;
       }else if( calc > 18.5 && calc <= 24.9 ){
        resp.innerHTML = `IMC: ${calc.toFixed(2)} -- Voce no peso normal`;
       }else if(calc => 25 && calc <= 29.9 ){
        resp.innerHTML = `IMC: ${calc.toFixed(2)} -- Voce esta com sobrepeso`;
       }else if ( calc => 30){
        resp.innerHTML = `IMC: ${calc.toFixed(2)} -- Voce esta obeso`;
       }
    }else if( typeof(valPeso) != Number ){
        resp.innerHTML = 'Seu campo peso precisa ser numero';
    }else if( typeof(valAltura) != Number ){
        resp.innerHTML = 'Seu campo altura precisa ser numero';
    }



}










form.addEventListener('submit', responde);