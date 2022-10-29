import express from "express";
import Hotel from  '../models/Hotel.js'
import {createHotel,updateHotel,deleteHotel,getHotel,getallHotel} from '../controllers/hotel.js'
const router = express.Router();

//create
router.post("/",createHotel)

//update
router.put("/:id", updateHotel)
//delete
router.delete("/:id", deleteHotel)
//get
router.get("/:id",getHotel)
//get all
router.get("/", getallHotel)

export default router