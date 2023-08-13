const express = require("express");
const app = express();

const db = require("../config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();

const port = process.env.PORT || 80;

app.post("/create", async (req, res) => {
  try {
    await db.collection("test").add(req.body);
    res
      .status(200)
      .json({ success: "true", msg: "Response saved successfully" });
  } catch (error) {
    res.status(400).json({ success: "false", msg: error.msg });
  }
});

app.listen(port, () => {
  console.log("server is running at port " + port);
});

module.exports = app;
