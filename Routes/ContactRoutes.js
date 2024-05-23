const express=require("express");
const router=express.Router();
const {getContact,createContact,updateContact,deleteContact}=require("../controllers/ContactControllers")

//this is the way to get the results for every route 

router.route("/").get(getContact).post(createContact)

router.route("/:id").put(updateContact).delete(deleteContact)

module.exports=router;   //no need to define module , we can directly use module to export