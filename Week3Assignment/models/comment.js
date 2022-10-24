const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CommentSchema = new schema({
    description:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    month: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Comment', CommentSchema);