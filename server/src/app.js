const express = require('express');
const morgan  = require('morgan');
const config  = require('./config');


const clientes = require ('./modulos/clientes/rutas.js');
const usuarios = require ('./modulos/usuarios/rutas.js');
const error    = require('./red/errors.js');



const app = express(); 

// middleware 
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// configuracion 
app.set('port',config.app.port);



// rutas 
app.use('/api/clientes/',clientes);
app.use('/api/usuarios/',usuarios);

app.use(error);


module.exports = app;