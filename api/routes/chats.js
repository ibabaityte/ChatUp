import {Router} from "express";
import checkAuth from "../middleware/check.auth.js";
import ChatController from "../controllers/chats.js"

const router = Router();

router.post("/chats/accessChat", checkAuth, ChatController.createChat);
router.get("/chats/fetchChats", checkAuth, ChatController.fetchChats);

export default router;