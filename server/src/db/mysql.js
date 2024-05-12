const mysql = require('mysql'); 
const config = require('../config');


const dbconfig = {
    host: config.mysql.host, 
    user: config.mysql.user, 
    password : config.mysql.pass, 
    database: config.mysql.db
}

let conexion

function connMysql(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if(err){
            console.log('[db err ]',err);
            setTimeout(connMysql,200)
        }
        else 
        {
            console.log("Base de datos Corriendo OK ")
        }
    });

    conexion.on('error', err => {
        console.log('[db err ]',err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST')
        {
            connMysql();
        }
        else {
            throw err; 
        }
    })
}

connMysql()


function selectAllDataQuery (tabla){
    return new Promise ( (resolve,reject) => {
        conexion.query(`SELECT * FROM ${tabla}`,(error, result) => {
             return error ? reject(error) : resolve(result);
            })
        }); 
}

function selectQuery(tabla,id){
    return new Promise ( (resolve,reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id_usuario = ${id}`,(error, result) => {
            return error ? reject(error) : resolve(result);
            })
        }); 
}



function deleteQuery(tabla,id){
    return new Promise ( (resolve,reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE id_usuariso = ${id}`,(error, result) => {
            return error ? reject(error) : resolve(result);
            })
        }); 
}

function addUpdateQuery(tabla,data){
    if(data && data.id_usuario == 0){

        return insertQuery(tabla,data);
    }
    else {
        return updateQuery(tabla,data);
    }
}


function insertQuery(tabla,data){
    return new Promise ( (resolve,reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ? `,data,(error, result) => {
            return error ? reject(error) : resolve(result);
            })
        }); 
}

function updateQuery(tabla,data){
    return new Promise ( (resolve,reject) => {
        conexion.query(`UPDATE ${tabla} SET ?  WHERE id_usuario = ?`,[data,data.id_usuario],(error, result) => {
            return error ? reject(error) : resolve(result);
            })
        }); 
}


module.exports = {
    selectAllDataQuery, 
    selectQuery,
    addUpdateQuery,
    deleteQuery
}