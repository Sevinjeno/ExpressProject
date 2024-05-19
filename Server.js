console.log("Express Installed")

const express=require("express");
const dotenv=require("dotenv").config();  //to enable env functionalities this line is needed 

const app =express();

const port=process.env.PORT || 7000; //using env for getting port

app.use("/api/contacts",require("./Routes/ContactRoutes.js")) //used as middleware 

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})