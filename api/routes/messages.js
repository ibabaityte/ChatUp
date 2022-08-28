import {Router} from "express";
import checkAuth from "../middleware/check.auth.js";
import MessageController from "../controllers/messages.js";

const router = Router();

router.post("/sendMessage", checkAuth, MessageController.sendMessage);
router.get("/fetchMessages/:chatId", checkAuth, MessageController.fetchMessages);

export default router;