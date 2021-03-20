const express = require('express');
const mySqlConnection= require('./connection');
const BlogRoutes = require('./routes/blog');
const UserRoutes = require('./routes/user');

var app = express();

app.use("/blogs",BlogRoutes);
app.use("/user",UserRoutes);



app.listen(3000);