import express from "express";
import {updateUser,deleteUser,getUser,getallUser} from '../controllers/user.js'
const router = express.Router();

//update
router.put("/:id", updateUser)
//delete
router.delete("/:id", deleteUser)
//get
router.get("/:id",getUser)
//get all
router.get("/", getallUser)

export default router