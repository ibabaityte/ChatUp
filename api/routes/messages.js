import {Router} from "express";
import MessageController from "../controllers/messages.js";
import checkAuth from "../middleware/check.auth.js";

const router = Router();

router.get("/messages/fetchMessages", checkAuth, MessageController.fetchMessages);
router.post("/messages/createMessage", checkAuth, MessageController.createMessage);

export default router;
