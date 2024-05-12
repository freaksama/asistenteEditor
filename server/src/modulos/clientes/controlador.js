const TABLA  = 'pro_usuarios'; 

module.exports = function (dbInyectada ){

    let db = dbInyectada 

    if(!db){
        db = require('../../db/mysql')
    }

    function getAllClientes(){
        return db.selectAllDataQuery(TABLA);
    }
    
    function getClientebyID(id){
        return db.selectQuery(TABLA,id)
    }
    
    function deleteClientebyID(id){
        return db.deleteQuery(TABLA,id)
    }
    
    function addCliente(body){
        return db.addUpdateQuery(TABLA,body)
    }

    return {
        getAllClientes,
        getClientebyID,
        deleteClientebyID,
        addCliente
    }
    
}