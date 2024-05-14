const Daytrip = require("../models/daytripModel");

const getAllDaytrips = async(req,res)=>{
    try {
        const daytrips = await Daytrip.find().populate("author")
        res.send(daytrips);
    } catch (error) {
        res.status(500).send({msg:"internal server error", status:false});
    }
};

const createDaytrip = async(req,res)=>{     //crate Daytrips
    try {
        console.log(req.user);
        const data = {
            title:req.body.title,           //a string will be sent from the frontend
            imgUrl:req.body.imgUrl,         //a string will be sent from the frontend(Cloudinary later)
            stops: req.body.stops,      //an object will be sent from the frontend
            author:  req.user.id
        };                                  // add country and city later

        const newDaytrip = await Daytrip.create(data)
        res.status(200).send({msg:"Blog created successfull", status: true, newDaytrip});
    } catch (error) {
        res.status(500).send({msg:"internal server error", status:false});
    }
};

const deleteDaytrip = async(req,res)=>{     // deletes Daytrips
    try {
        const {id} = req.params;            
        await Daytrip.deleteOne({_id: id });
        res.status(200).send({msg:"deleted successfully", status:true});
    } catch (error) {
        res.status(500).send({msg:"internal server error", status:false});
    }
}
const updateDaytrip = async(req,res)=>{     //update Daytrips
    try {
        const {id} = req.params;
        const data = req.body;
        let updated = await Daytrip.updateOne({_id:id}, data);
        res.status(200).send({msg:"updated successfully", status:true, updated});
    } catch (error) {
        res.status(500).send({msg:"internal server error", status:false});
    }
}
const inspectDaytrip = async(req,res)=>{    //inspect Daytrips
    try {
        const {id} = req.params;
        const daytrip = await Daytrip.findOne({_id:id});
        res.send(daytrip);
    } catch (error) {
        res.status(500).send({msg:"internal server error", status:false});
    }
}
// add filter function here or on the frontend

module.exports = {getAllDaytrips, createDaytrip, deleteDaytrip, updateDaytrip, inspectDaytrip};