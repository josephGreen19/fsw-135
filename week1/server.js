const express = require('express');
const app = express();
const port = 9000;
const mongoose = require('mongoose');
const {Db}= require ('mongodb');
const morgan = require('morgan');
const inventoryRouter = require('./routes/inventoryRouter');

// Middleware (for every request) //
app.use(express.json()); 
app.use(morgan('dev')); 
app.use("/inventory",inventoryRouter);


// Connect to MongoDB

async function main() {
      await mongoose.connect('mongodb://localhost:27017/inventorydb');
      console.log("Connected to the DB");
}
main().catch(err => console.log(err));

 


  app.listen(port);