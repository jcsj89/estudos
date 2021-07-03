const express = require('express');
const app = express();


app.get('/', (request, response) => {
    response.send('hello Jose')
});



app.listen(3333,()=>{
    console.log('server startado');
    console.log('http://localhost:3000');
});