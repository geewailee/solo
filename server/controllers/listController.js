const List = require("../models/listModel");
const listController = {};

listController.getList = (req, res, next) => {
  // const queryString = "SELECT * FROM items";
  const queryString = "SELECT * FROM items";

  List.query(queryString, null)
    .then(result => {
      console.log("result.rows");
      console.log(result.rows);

      res.locals = result.rows;

      next();
    })
    .catch(err => {
      console.log(`anything`);
      next({
        err,
      });
    });
};
module.exports = listController;
