const List = require("../models/listModel");
const listController = {};

// what we're getting from the database
listController.getList = (req, res, next) => {
  const queryString = "SELECT * FROM items";

  List.query(queryString, null)
    .then(result => {
      // console.log(result);
      console.log("result.rows");
      console.log(result.rows);
      // res.send(result);
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
