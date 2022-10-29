import User from '../models/User.js'
// // create hotel 
// export  const  createHotel = async (req,res,next) =>{
//     const newUser = new User(req.body)
    
//     try{
//           const savedUser = await newUser.save()
//           res.status(200).json(savedUser)
//     }catch(err){
//         next(err)
//     }
// }

// update hotel 
export  const  updateUser = async (req,res,next) =>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id , {$set : req.body},
         {new : true})
        res.status(200).json(updatedUser)
  }catch(err){
    next(err)
  }
}

// delete hotel
export  const  deleteUser = async (req,res,next) =>{
    try{
        await User.findByIdAndDelete(req.params.id)
         res.status(200).json({"message" : "hotel deleted"})
   }catch(err){
       next(err)
   }
}

// get hotel by id
export  const  getUser = async (req,res,next) =>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
  }catch(err){
      next(err)
  }
}
// get all hotels
export  const  getallUser = async (req,res,next) =>{
    try{
        const user = await User.find(req.params.id)
        res.status(200).json(user)
  }catch(err){
      next(err)
  }
}