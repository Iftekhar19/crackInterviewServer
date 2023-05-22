const mongoose = require("mongoose");
const addQuestionSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    unique:true
  },
  category: {
    required: true,
    type: String,
  },
  providerName: {
    required: true,
    type: String,
  },
  company: {
    
    type: String,
  },
  interviewerName:{
    type:String
  }
});
const addQuestionModel=mongoose.model("allQuestions",addQuestionSchema);
module.exports=addQuestionModel;
