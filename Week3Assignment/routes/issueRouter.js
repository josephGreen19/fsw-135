const express = require('express');
const issue = require('../models/issue.js');
const issueRouter = express.Router();
const Issue = require('../models/issue.js');





// Get ALL
issueRouter.get("/", (req, res, next) => {
Issue.find((err, issueList) =>{
if(err){
    res.status(500);
    return next(err);
}
    return res.status(200).send(issueList);

});
});

// Get One
issueRouter.get("/:issueId", (req, res, next) => {
   const issueId = req.params.issueId;
   const foundIssue = Issue.find(issue => issue._id === issueId);
   if(!foundIssue){
      const error = new Error(`The item with the id ${issueId} was not found.`);
      res.status(500);
      return next(err);
   }
      return res.status(200).send(foundIssue);
});


// Post
issueRouter.post("/", (req, res, next) => {
    const newItem = new issue(req.body);
    newItem.save((err, savedItem) =>{
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(200).send(savedItem);
    
    });
    });

    // Put
issueRouter.put("/:IssueId", (req, res, next) => {
   Issue.findOneAndUpdate(
    {_id: req.params.IssueId},
    req.body,
    {new: true},
    (err, updateIssue) =>{
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(201).send(updateIssue);
    }
  )
});

    // Delete
issueRouter.delete("/:IssueId", (req, res, next) => {
    Issue.findOneAndDelete(
        {_id: req.params.IssueId},
        (err, deleteItem) => {
   
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(200).send('Successfully deleted item from the database');
    
    }
    );
    });





module.exports = issueRouter;