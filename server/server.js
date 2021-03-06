const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require("./routes/api");

app.use(express.json());

app.use("/api", apiRouter);

// app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});
app.listen(3000);
