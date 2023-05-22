const jwt=require("jsonwebtoken");
const signUpModel=require("../model/signupModel.js");
const bcrypt=require("bcrypt")
const cred={
   loginMiddleware:async function(req,res,next){
    const {email,password}=req.body;
    
    if(!email || !password)
    {
       return res.status(403).json({
        "status":"failed",
        "message":"incomplete data provided!"
       }); 
    }
    else
    {  
        let data=await signUpModel.find({email:req.body.email});
    if(data.length==0)
    {
     
    return res.status(401).json({
      "status":"failed",
      "message":"invalid email Or password"
     })
    }
    else{
     
      bcrypt.compare(req.body.password,data[0].password,function(err,isMatch)
     {
         
         if(err || !isMatch)
         {
             
            return res.status(403).json({
             "status":"failed",
             "message":"invalid email Or password"

            }) 
         }
         
         else{
             
         req.body.data=data[0];
           next();
         }
     })
    }
     
    }

   }, 
   signUpMiddleware:function(req,res,next)
   {
    const {email,phone,name,password}=req.body;
    if(!email || !phone || !name || !password)
    {
       return res.status(401).json({
        "status":"failed",
        "message":"incomplete data provided"
       })
    }
    else{
       bcrypt.genSalt(Number(process.env.SALT_ROUNDS)||10).then(salt=>
        {
            return bcrypt.hash(req.body.password,salt);
        }).then((hash)=>
        {
           
          req.body.password=hash; 
          next(); 
         
        }) 
        
        
    }
   }
}
module.exports=cred;