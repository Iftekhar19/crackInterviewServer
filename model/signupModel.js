const mongoose=require("mongoose");
const SignSchema=new mongoose.Schema({
  email:{type:String,required:true,unique:true},
  phone:{type:Number,required:true,unique:true},
  password:{type:String,required:true},
  name:{type:String,required:true}
});
const signUpModel=mongoose.model("UsersCredentials",SignSchema);
module.exports=signUpModel;
