const express = require('express');
const comment = require('../models/comment.js');
const commentRouter = express.Router();
const Comment = require('../models/comment.js');





// Get ALL
commentRouter.get("/", (req, res, next) => {
Comment.find((err, commentList) =>{
if(err){
    res.status(500);
    return next(err);
}
    return res.status(200).send(commentList);

});
});

// Get One
commentRouter.get("/:CommentId", (req, res, next) => {
   const commentId = req.params.commentId;
   const foundComment = Comment.find(comment => comment._id === commentId);
   if(!foundComment){
      const error = new Error(`The item with the id ${commentId} was not found.`);
      res.status(500);
      return next(err);
   }
      return res.status(200).send(foundComment);
});


// Post
commentRouter.post("/", (req, res, next) => {
    const newItem = new Comment(req.body);
    newItem.save((err, savedItem) =>{
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(200).send(savedItem);
    
    });
    });

    // Put
commentRouter.put("/:CommentId", (req, res, next) => {
   Comment.findOneAndUpdate(
    {_id: req.params.CommentId},
    req.body,
    {new: true},
    (err, updateComment) =>{
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(201).send(updateComment);
    }
  )
});

    // Delete
commentRouter.delete("/:CommentId", (req, res, next) => {
    Comment.findOneAndDelete(
        {_id: req.params.CommentId},
        (err, deleteItem) => {
   
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(200).send('Successfully deleted item from the database');
    
    }
    );
    });





module.exports = commentRouter;