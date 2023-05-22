const express=require("express");
const getDataControllers=require("../controllers/getDatacontroller")
const router=express.Router();
router.get("/:category",getDataControllers)
module.exports=router;