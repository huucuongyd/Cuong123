const Users = require('../models/Users')

exports.signedUpUser = (request,res) =>{
    const user = new Users({
    username:request.body.username,
    password:request.body.password
})
user.save((err) =>{
        if(err) {
            res.status(500).send({message: err})
            return;
        }
    }
)
res.send({message:"user registed"})
}


exports.signInUser = ((req,res) =>{
    Users.find({
        username:req.body.username,
        password:req.body.password
    }).exec((err,user) =>{
        if(err) {
            console.log(err)
            res.status(500).send({message: err})
        }
        else if (!user){
            return res.status(404).send({message:"User not found!"})
        }
        res.status(200).send({
            message:"Login succes!"
        })
    })
})

