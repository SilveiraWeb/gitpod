import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", ensureAdmin, createUserController.handle);
router.get("/users", ensureAdmin, (req, res) => {res.send("Running users")});
router.post("/tags", ensureAdmin, createTagController.handle);
router.get("/tags", (req, res) => {res.send("Running tags")});
router.post("/login", authenticateUserController.handle)

export { router };
