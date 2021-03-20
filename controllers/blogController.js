const mySqlConnection= require('../connection');
const Blog = require('./../models/blog')


exports.blog_get = function(req, res) {
    mySqlConnection.query("SELECT * from Blog",(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            res.send('Hy no Data found')
        }
    })
};

exports.test= function(req,res){
    return res.send('this is for test')
}