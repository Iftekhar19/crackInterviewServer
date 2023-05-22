const addQuestionModel=require("../model/addQuestionModel");
const addQuestionControllers={
    addQuestion:async function(req,res)
    {
       const {title,providerName,category,company,interviwerName}=req.body;
       const temp=new addQuestionModel({
        title,
        providerName,
        category,
        company:company==""?"":company,
        interviewerName: interviwerName==""?"":interviwerName
       });
       try{
        await temp.save();
        return res.status(200).json({
           "status":"success",
           "message":"data inserted successfully" 
        })
       }
       catch(err)
       {
        
       return res.status(402).json({
           "status" :"failed",
           "message":err.message
        })
       }
      
    }
}
module.exports=addQuestionControllers