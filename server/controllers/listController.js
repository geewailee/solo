const List = require("../models/listModel");
const listController = {};
let index = 0;

listController.getList = (req, res, next) => {
  // const queryString = "SELECT * FROM items";
  const queryString = "SELECT * FROM items";

  List.query(queryString, null)
    .then(result => {
      console.log("result.rows");
      console.log(result.rows);
      index = result.rows.length;

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

listController.addItem = (req, res, next) => {
  console.log(`req.body.input ${req.body.input}`);

  let add = [index++, req.body.input];
  console.log(`add ${add}`);

  // const queryString = "SELECT * FROM items";
  const addString = "INSERT INTO items(id, name) VALUES ($1, $2)";

  List.query(addString, add)
    .then(result => {
      console.log("result add");
      console.log(result);

      res.locals = result.rows[0];
      next();
    })
    .catch(err => {
      console.log(`add error`);
      next({
        err,
      });
    });
};

listController.deleteItem = (req, res, next) => {
  let remove = [index];
  index--;
  console.log(`remove ${remove}`);
  const deleteString = " DELETE FROM items WHERE id=1;";

  List.query(deleteString, remove)
    .then(result => {
      console.log("result remove");
      console.log(result);

      // res.locals = result.rows[0];
      next();
    })
    .catch(err => {
      console.log(`add error`);
      next({
        err,
      });
    });
};

module.exports = listController;
