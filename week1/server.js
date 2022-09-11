const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const morgan = require('morgan');

// Middleware (for every request) //
app.use(express.json()) 
app.use(morgan('dev')) 


// Connect to MongoDB
main().catch(err => console.log(err));
  async function main() {
      await mongoose.connect('mongodb://localhost:27017/moviesdb');
      console.log("Connected to the DB")
  }

 



  app.listen(port);