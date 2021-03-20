const express = require('express');
const router = express.Router();
var user_controller = require('./../controllers/userController');

router.get("/",user_controller.user_get);

module.exports=router;