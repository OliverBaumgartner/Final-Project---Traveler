const mongoose = require("mongoose");
const daytripSchema = new mongoose.Schema(
    {
        title: String,
        duration: String,
        stops: Object,
        author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        image: String,
        comments: Array,
        rating: String,
        times: Array
    },{
        timestamps: true
    }
); 

// Model
const Daytrip = mongoose.model("Daytrip", daytripSchema);

module.exports = Daytrip;