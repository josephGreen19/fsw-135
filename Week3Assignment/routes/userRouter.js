const express = require('express');
const user = require('../models/user.js');
const userRouter = express.Router();
const User = require('../models/user.js');





// Get ALL
userRouter.get("/", (req, res, next) => {
User.find((err, userList) =>{
if(err){
    res.status(500);
    return next(err);
}
    return res.status(200).send(userList);

});
});

// Get One
userRouter.get("/:UserId", (req, res, next) => {
   const userId = req.params.userId;
   const foundUser = user.find(user => user._id === userId);
   if(!foundUser){
      const error = new Error(`The item with the id ${userId} was not found.`);
      res.status(500);
      return next(err);
   }
      return res.status(200).send(foundUser);
});


// Post
userRouter.post("/", (req, res, next) => {
    const newItem = new User(req.body);
    newItem.save((err, savedItem) =>{
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(200).send(savedItem);
    
    });
    });

    // Put
userRouter.put("/:UserId", (req, res, next) => {
   User.findOneAndUpdate(
    {_id: req.params.UserId},
    req.body,
    {new: true},
    (err, updateUser) =>{
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(201).send(updateUser);
    }
  )
});

    // Delete
userRouter.delete("/:UserId", (req, res, next) => {
    User.findOneAndDelete(
        {_id: req.params.UserId},
        (err, deleteItem) => {
   
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(200).send('Successfully deleted item from the database');
    
    }
    );
    });





module.exports = userRouter;