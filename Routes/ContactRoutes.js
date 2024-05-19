const express=require("express");
const router=express.Router();

//this is the way to get the results for every route 

router.route("/").get((req,res)=>{
    res.status(200).json({message:"Get all Contacts"});
})

router.route("/").post((req,res)=>{
    res.status(200).json({message:"Create Contacts"});
})

router.route("/:id").put((req,res)=>{
    res.status(200).json({message:`Update for ${req.params.id}`});
})

router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:`Delete for ${req.params.id}`});
})



module.exports=router;   //no need to define module , we can directly use module to export