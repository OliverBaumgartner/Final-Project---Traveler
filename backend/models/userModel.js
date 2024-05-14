const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        username: String,
        email: {type: String, required: true, lowercase: true},
        password: String,
        //saved: { type: mongoose.Schema.Types.ObjectId, ref: "Daytrip"},
    },{
        timestamps: true
    }
); 

// Model
const User = mongoose.model("User", userSchema);

module.exports = User; 