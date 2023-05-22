const express =require("express");
const router=express.Router();
const cred=require("../middlewares/credentialMiddlewares");
const credentialControllers=require("../controllers/credentialController");
router.post("/signup",cred.signUpMiddleware,credentialControllers.SignUpControllers);
router.post("/login",cred.loginMiddleware,credentialControllers.LogInController)

module.exports=router