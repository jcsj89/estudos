require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then( ()=>{
    console.log('Conectado ao mongo');
    app.emit('pronto');
}).catch(e=>console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const { middlewareGlobal, checkCsrf, csrfMiddleware } = require('./src/middlewares/middleware');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');

app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({extended: true})); //para o express tratar as req post e put

app.use(express.static( path.resolve(__dirname, 'public') ));

const sessionOptions = session({
    secret: 'alsdjlaksjdklj',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use( flash() );

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use( csrf() );

//middlewares
app.use(middlewareGlobal);
app.use(checkCsrf);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', ()=>{
    app.listen(8080,()=>{
        console.log('Start Server on port 8080...');
        console.log('http://localhost:8080');
    });
    
});
