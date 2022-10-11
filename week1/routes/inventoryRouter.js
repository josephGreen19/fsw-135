const express = require('express');
const inventory = require('../models/Inventory.js');
const inventoryRouter = express.Router();
const Inventory = require('../models/Inventory.js');





// Get ALL
inventoryRouter.get("/", (req, res, next) => {
Inventory.find((err, inventoryList) =>{
if(err){
    res.status(500);
    return next(err);
}
    return res.status(200).send(inventoryList);

});
});

// Get One
inventoryRouter.get("/:InventoryId", (req, res, next) => {
   const inventoryId = req.params.inventoryId;
   const foundInventory = Inventory.find(inventory => inventory._id === inventoryId);
   if(!foundInventory){
      const error = new Error(`The item with the id ${inventoryId} was not found.`);
      res.status(500);
      return next(err);
   }
      return res.status(200).send(foundInventory);
});


// Post
inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body);
    newItem.save((err, savedItem) =>{
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(200).send(savedItem);
    
    });
    });

    // Put
inventoryRouter.put("/InventoryId", (req, res, next) => {
   Inventory.findOneAndUpdate(
    {_id: req.params.InventoryId},
    req.body,
    {new: true},
    (err, updateInventory) =>{
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(201).send(updateInventory);
    }
  )
});

    // Delete
inventoryRouter.delete("/:InventoryId", (req, res, next) => {
    Inventory.findOneAndDelete(
        {_id: req.params.InventoryId},
        (err, deleteItem) => {
   
    if(err){
        res.status(500);
        return next(err);
    }
        return res.status(200).send('Successfully deleted item from the database');
    
    }
    );
    });





module.exports = inventoryRouter;