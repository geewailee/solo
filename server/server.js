const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require("./routes/api");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ exten ded: true }));

app.use("/api", apiRouter);

// app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});
app.listen(3000);

// app.use((req, res, next) => {
//   console.log(`
//   ********* FLOW TEST *********\n
//   METHOD: ${req.method}\n
//   URL: ${req.url}\n
//   BODY: ${JSON.stringify(req.body)}\n`);
//   return next();
// });
