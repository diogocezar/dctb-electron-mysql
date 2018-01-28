const config = require('../config/config')
const mysql = require('mysql')

const Database = {
    connection : null,
    startConnection : () => {
        Database.connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.pass,
            database : config.base
        })
        Database.connection.connect((err) => {
            if(err)
                console.log('[ERROR!] ' + err.message);
        })
    }
}

Database.startConnection();

module.exports = Database