import {Router} from "express";
import checkAuth from "../middleware/check.auth.js";
import MessageController from "../controllers/messages.js";

const router = Router();

router.post("/messages/sendMessage", checkAuth, MessageController.sendMessage);
router.get("/messages/fetchMessages", MessageController.fetchMessages);

export default router;