const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        username: String,
        email: {type: String, required: true, lowercase: true},
        password: String,
        saved: Array,
    },{
        timestamps: true
    }
); 

// Model
const User = mongoose.model("User", userSchema);

module.exports = User; 