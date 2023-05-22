const addQuestionModel = require("../model/addQuestionModel");
async function getDataControllers(req, res) {
  const category = req.params.category;
  const { limit, page } = req.query;
  let ans = await addQuestionModel.countDocuments();
  //  let startIndex=(page-1)*limit;
  //  let endIndex=page*limit;
  let data = await addQuestionModel
    .find({ category })
    .skip((Number(page) - 1) * Number(limit)||10)
    .limit(Number(limit)||10);

  return res.json({
    status: "success",
    data,
    count: ans,
  });
}
module.exports = getDataControllers;
