const express=require("express");
const router=express.Router();
const addQues=require("../middlewares/addQuestionMiddleware")
const addQuestionControllers=require("../controllers/addQuestionControllers")
router.post("/addquestion",addQues.addQuestionMidd,addQuestionControllers.addQuestion);
module.exports=router;