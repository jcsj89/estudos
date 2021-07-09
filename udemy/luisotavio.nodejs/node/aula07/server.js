const express = require('express');
const app = express();
const routes = require('./routes');
app.use(express.urlencoded({extended: true})); //para o express tratar as req post e put

app.use(routes);


app.listen(3333,()=>{
    console.log('server startado');
    console.log('http://localhost:3000');
});
