const jwt = require("jsonwebtoken");
const userModel = require("../model/signupModel");
const addQues = {
  addQuestionMidd: function (req, res, next) {
    let token = req.headers.authorization;
    const jwtKey = token?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: "failed",
        message: "token not provided !",
      });
    } else {
      let temp = jwt.verify(
        jwtKey,
        process.env.JWT_SECRET_KEY,
        async (err, verified) => {
          if (err) {
            return res.status(401).json({
              status: "failed",
              message: "invalid token",
            });
          } else {
            try {
              let ans = await userModel.findById(verified._id);
              req.body.providerName = ans.name;

              next();
            } catch (err) {
              return res.status(401).json({
                status: "failed",
                message: "unauthorized user !",
              });
            }
          }
        }
      );
    }
  },
};
module.exports = addQues;
