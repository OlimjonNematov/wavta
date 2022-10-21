const express = require("express");
const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`WAVTA app listening on port ${port}`);
});

app.get("/", (req, res) => {
  const question = req.params.question;

  res.send(question).then(() => console.log(e));
});

app.put("path", (req, res) => {});

app.delete("path", (req, res) => {});

app.post("path", (req, res) => {});

app.disable(name);
