import express from "express";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(req.method, req.url);
});

app.get("/", (req, res) => {
  res.send("Hello world");
  console.log(req.method);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
