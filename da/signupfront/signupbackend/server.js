const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./routes/router')

dotenv.config();

mongoose.connect('mongodb://localhost/Login', ()=> console.log("connected!!!"))


app.use(express.json())
app.use(cors());
userRouter(app)
app.listen(4000,()=> console.log("server is up and running"));

