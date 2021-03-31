const mongoose = require('mongoose');

const Users = new mongoose.model(
    'Users',
    new mongoose.Schema({
        username:{type: String, require: true},
        password:{type: String, require: true},
    })
)

module.exports = Users

// const signIn = new mongoose.Schema({
    
//     username:{
//         type: String,
//         required:true
//     },
    
//     password:{
//         type: String,
//         required:true
//     }
// })

// module.exports = mongoose.model('myLogin',signIn)
