const mongoose = require("mongoose");
const schema = mongoose.Schema;

const InventorySchema = new schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
});

module.exports = mongoose.model('Inventory', InventorySchema);