import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.sendStatus(201)
  console.log(req.method)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});