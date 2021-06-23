import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
const router = Router();

const createUserController =  new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.handle);
router.get("/users", (req, res) => {
  res.send("Running users");
});
router.post("/tags", createTagController.handle);
router.get("/tags", (req, res) => {
  res.send("Running tags");
});

export {router};