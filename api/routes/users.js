import {Router} from "express";
import checkAuth from "../middleware/check.auth.js";
import UsersController from "../controllers/users.js";
import upload from "../utils/multerConfig.js";

const router = Router();

router.post("/login", UsersController.login);
router.post("/register", UsersController.register);
router.get("/:userId", checkAuth, UsersController.get);
router.get("/users/search", checkAuth, UsersController.search);
router.delete("/:userId", checkAuth, UsersController.remove);
router.put("/users/:userId", upload.single("image"), checkAuth, UsersController.update);

export default router;
