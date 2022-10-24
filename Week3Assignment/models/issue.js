const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IssueSchema = new Schema ({
    number:{
        type: Number,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
    
});
module.exports = mongoose.model("Issue", IssueSchema);