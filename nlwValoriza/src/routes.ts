import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimentController();

router.post("/users", ensureAdmin, createUserController.handle);
router.get("/users", (req, res) => {res.send("Running users")});
router.post("/tags", ensureAdmin, createTagController.handle);
router.get("/tags", (req, res) => {res.send("Running tags")});
router.post("/login", authenticateUserController.handle)
router.post("/compliment", complimentController.handle)

export { router };
