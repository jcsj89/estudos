/* Este script exibe uma mensagem para o usuario de acordo com a hora atual
   Este é um exemplo do livro pg 57*/
var today = new Date();
var hourNow = today.getHours();
var greeting;

//exibe a mensagem apropriada de acordo com a hora atual
if (hourNow > 18 ) {
	greeting = 'Good evening!';
}else if ( hourNow > 12 ){
	greeting = 'Good afternoon!';
}else if ( hourNow > 0){
	greeting = 'Good morning!';
}else {
	greeting = 'Welcome';
}

document.write( '<h3>' + greeting + '</h3>' );