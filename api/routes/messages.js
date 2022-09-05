import {Router} from "express";
import MessageController from "../controllers/messages.js";

const router = Router();

router.get("/messages/fetchMessages", MessageController.fetchMessages);

export default router;