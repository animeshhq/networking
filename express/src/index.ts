import express from "express";
import cors from "cors";
import user from "./routes/user";

const app = express();
app.use(cors());
const PORT = 3000;

app.use("/user", user);

app.listen(PORT, () => {
  console.log("Listening to port 3000");
});
