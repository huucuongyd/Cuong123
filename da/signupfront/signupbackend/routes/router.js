const { request } = require('express');
const express =  require('express');
const router =  express.Router();
const userController = require('../controller/userController')
module.exports = function(app)
{
    // app.use((req,res,next) =>{
    //     app.header(
    //         "Access-Control-Allow-Headers",
    //         "x-access-token, Origin, Content-Type, Accept"
    //     )
    //     next();
    // });
    app.post('/signup', userController.signedUpUser)
    app.post('/signin',userController.signInUser)
}

