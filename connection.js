const mysql = require('mysql');

var mySqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'Paps@8984',
    database: 'BlogExpress',
    multipleStatements: true
});

mySqlConnection.connect((err)=>{
    if(!err){
        console.log("MySQL Database is connected");
    }else{
        console.log('Connection Failed')
    }
});


module.exports = mySqlConnection;