import express, { response } from "express";
import dotenv from 'dotenv';
import authRoute from './api/routes/auth.js'
import usersRoute from './api/routes/users.js'
import hotelsRoute from './api/routes/hotels.js'
import roomsRoute from './api/routes/rooms.js'
import mongoose from 'mongoose';
const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("database is connected")
}).catch((err)=>{
    console.log(err.message)
})

app.get("/", (req,res)=>{
    res.send("hello")
})
//middleware
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "error in api"
    return res.status(errorStatus).json({
        success : "false",
        status : err.status
    })
})
 

app.listen(8800, ()=>{
    console.log("server started")

})