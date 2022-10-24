const express = require('express');
const app = express();
const port = 9000;
const mongoose = require('mongoose');
const {Db}= require ('mongodb');
const morgan = require('morgan');
const commentRouter = require('./routes/commentRouter');
const issueRouter = require('./routes/issueRouter');
const userRouter = require('./routes/userRouter');

// Middleware (for every request) //
app.use(express.json()); 
app.use(morgan('dev')); 
app.use("/comment",commentRouter);
app.use("/issue",issueRouter);
app.use("/user",userRouter);


// Connect to MongoDB

async function main() {
      await mongoose.connect('mongodb://localhost:27017/inventorydb');
      console.log("Connected to the DB");
}
main().catch(err => console.log(err));

app.listen(port);
