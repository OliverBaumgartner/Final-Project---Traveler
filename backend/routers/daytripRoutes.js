const express = require("express");
const router = express.Router();


const{
    getAllDaytrips, 
    createDaytrip,
    deleteDaytrip,
    updateDaytrip,
    inspectDaytrip
    } = require("../controllers/daytripController");
const verifyToken = require("../middleware/auth");


router.post("/create", verifyToken, createDaytrip);           //route for creating a new Daytrip (needs work still)
router.get("/", getAllDaytrips);                    //route for getting all Daytrips
router.put("/:id", updateDaytrip);         //route for Updating a Daytrip
router.delete("/:id", deleteDaytrip);       //route for deleting a Daytrip
router.get("/:id", inspectDaytrip);       //route for inspecting a Daytrip

module.exports = router;