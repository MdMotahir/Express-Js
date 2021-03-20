const mySqlConnection= require('../connection');

exports.user_get = function(req, res) {
    mySqlConnection.query("SELECT * from User",(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            res.send('Hy no Data found')
        }
    })
};



