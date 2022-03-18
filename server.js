const express = require("express");
const path = require("path");

const port = process.env.PORT || 8080;
const host = "0.0.0.0";

const app = express();

const distDir = path.join(__dirname, "dist", "myherokudemoapp");

app.use(express.static(distDir));

app.get("/*", (req, res) => {
  res.sendFile(__dirname, "dist", "myherokudemoapp", "index.html");
});

app.listen(port, () => {
  console.log("Server is running");
});
