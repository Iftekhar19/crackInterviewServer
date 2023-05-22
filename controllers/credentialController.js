const signUpModel=require("../model/signupModel.js");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const credentialControllers={
    SignUpControllers:async function(req,res)
    {
      const data=new signUpModel({name:req.body.name,phone:req.body.phone,email:req.body.email,password:req.body.password});
      try{
       let temp=await data.save();
       const expiryTime=60*60*24*15;
       let token =jwt.sign({_id:temp._id,email:temp.email,phone:temp.phone,name:temp.name},process.env.JWT_SECRET_KEY,{expiresIn:expiryTime+"s"})
       return res.status(201).json({
        "status":"success",
        "message":"signed up successfully",
        token,
        "email":temp.email,
       })
      } catch(err)
      {
       
        return res.status(400).json({
            "status":"failed",
            "message":err.message
           })
      }
    },
    LogInController: function(req,res)
    {
        
        const data=req.body.data;
        // jwt need to be implemented later 
        const expiryTime=60*60*24*15;
        let token =jwt.sign({_id:data._id,email:data.email,phone:data.phone,name:data.name},process.env.JWT_SECRET_KEY,{expiresIn:expiryTime+"s"})
        
        res.status(200).json({
            "status":"success",
            "message":"logged in successfully! ",
            token,
            name:data.name
        })
    }
}
module.exports=credentialControllers