import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/login';

const login = new Login('.form-login');
const cadastro = new Login(".form-cadastro");
console.log('main js');

login.init();
cadastro.init();

//import './assets/css/style.css';
