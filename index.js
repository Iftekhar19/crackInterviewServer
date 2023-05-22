const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();
const credentails=require("./routers/credentials");
const addQuestionRouter=require("./routers/addQuestion");
const getDataRouter=require("./routers/getData");
const app=express();
app.use(cors())
app.use(express.json());
// DB connection
mongoose.connect("mongodb://0.0.0.0:27017/crackInteview",{
    
        useNewUrlParser: true,
        
        useUnifiedTopology: true
      
}).then(()=>console.log("connect to mongoDB")).catch(err=>
    {
        console.log(err);
    })
// ROUTERS
// login and signup
app.use("/api/credential",credentails)
// data insertion into DB
app.use("/api/",addQuestionRouter)
// get alldata or questions
app.use("/api/alldata/",getDataRouter)
app.listen(5000,()=>console.log("app is running at port number 5000"));