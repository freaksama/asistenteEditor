const express = require ('express')

const respuestas = require('../../red/respuestas')

const controlador = require('./index')

const router = express.Router(); 


router.get('/',AllClientes); 
router.get('/:id',ClienteById);
router.put('/:id',DeleteCliente);
router.post('/',AddCliente);


async function AddCliente(req, res, next){
    try{
        const item = await controlador.addCliente(req.body); 
        if(req.body.id_usuario == 0){
            mensaje = 'Nuevo Registro con exito';
        }
        else {
            mensaje = 'Registro actualizado correctamente'
        }
        respuestas.sucess(req,res,item,201);
    }
    catch(err){
        next(err)
    }

}

 async function AllClientes (req,res,next) {
    try{
        const items = await controlador.getAllClientes(); 
        respuestas.sucess(req,res,items,200)
    }
    catch(err){
        next(err)
    }
};


async function ClienteById (req,res, next) {
    try{
        const items = await controlador.getClientebyID(req.params.id); 
        respuestas.sucess(req,res,items,200)
    }
    catch(err){
        next(err)
    }
};


async function DeleteCliente (req,res, next) {
    try{
        const items = await controlador.deleteClientebyID(req.params.id); 
        respuestas.sucess(req,res,'El registro a sido eliminado satisfactoriamente',200)
    }
    catch(err){
        next(err)
    }
};






module.exports = router; 