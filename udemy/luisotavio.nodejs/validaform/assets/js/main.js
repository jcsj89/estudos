class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');

        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {            
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposSaoValidos = this.camposSaoValidos();
        const senhaValidas = this.senhasValidas();

        if(camposSaoValidos && senhaValidas){
            alert('formulario enviado.');
            this.formulario.submit();
        }
    }

    senhasValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const resenha = this.formulario.querySelector('.repete-senha');

        if (senha.length < 6 || senha.length > 12){
            this.criaErro(senha,'Senha precisa ter entre 6 e 12 caracteres.')
            valid = false;
        }

        return valid;
    }

    camposSaoValidos(){
        let valid = true;
        
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();            
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            let label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.criaErro(campo,`Campo ${label} nao pode estar vazio.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }  
        return valid;      
    }

    validaUsuario(campo){
        const usuario = String(campo.value);
        let valid = true;

        if( usuario.length < 3 || usuario.length > 12 ) {
            this.criaErro(campo,'Usuario precisa ter entre 3 e 12 caracteres.');
            return valid = false;
        }
        if( !usuario.match(/^[a-zA-z0-9]+$/g) ) {
            this.criaErro(campo,'Usuario nao pode ter caracteres especiais caracteres.');
            return valid = false;
        }
        return valid;
    }

    validaCPF(campo){
        const ramdomNum = Math.floor( Math.random() * 10 + 1 ); 

        if (ramdomNum < 5 ){
            this.criaErro(campo,'CPF Inválido.');
            return false;
        }

        return true;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend',div);
    }
}

const valida = new ValidaFormulario();









