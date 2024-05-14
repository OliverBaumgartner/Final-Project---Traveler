const mongoose = require("mongoose");
const daytripSchema = new mongoose.Schema(
    {
        title: String,
        duration: String,
        stops: Object,
        creator: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        image: String,
        comments: Array,
        Rating: String,
    },{
        timestamps: true
    }
); 

// Model
const Daytrip = mongoose.model("Daytrip", daytripSchema);

module.exports = Daytrip;