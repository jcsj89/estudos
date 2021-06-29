function Produto(nome,preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(aumento) {
    this.preco += aumento;
};
Produto.prototype.desconto = function(desconto) {
    this.preco -= aumento;
};

function Caneca(nome,preco,material) {
    Produto.call(this,nome,preco);
    this.material = material;    
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.mudaMaterial = function(material){
    this.material = material;
};

const canequinha = new Caneca('caneca',10, 'porcelana');
canequinha.mudaMaterial('nao porcelana');


console.dir(canequinha);