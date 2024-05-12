require('dotenv').config(); 

module.exports = {
    app: {
        port: process.env.PORT
    }, 

    mysql :{
        host : process.env.MYSQL_HOST || 'localhost', 
        user : process.env.MYSQL_USER || 'root', 
        pass : process.env.MYSQL_PASSWORD || '12345678', 
        port : process.env.MYSQL_PORT || '3306',
        db   : process.env.MYSQL_DB || 'proyectos_digitales' 

    }
}