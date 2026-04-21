import express from "express";
import { userIdSchema } from "../schemas/user.schema";

const router = express.Router();

router.get("/about", (req, res) => {
  res.send("hellloooo");
});

router.get("/:id", (req, res) => {
  const result = userIdSchema.safeParse(req.params);
  if (!result.success) {
    return res.status(400).send("Invalid ID");
  }

  const id = Number(result.data.id);
  res.send(`User ${id}`);
});

export default router;
