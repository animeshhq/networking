import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/user/:id", (req, res, next) => {
  if (req.params.id === "0") {
    return next("route");
  }
  res.send(`User ${req.params.id}`);
});

app.get("/user/:id", (req, res) => {
  res.send("Special handler for user ID 0");
});

app.listen(PORT, () => {
  console.log("Listening to port 3000");
});
