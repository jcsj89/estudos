const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true})); //para o express tratar as req post e put

app.use(express.static( path.resolve(__dirname, 'public') ));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3333,()=>{
    console.log('server startado');
    console.log('http://localhost:3000');
});
