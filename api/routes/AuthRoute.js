import express from "express";
import { Login, Signup } from "../controllers/AuthController.js";
import { userVerification } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.post("/signup", Signup)
router.post("/login", Login)
router.post("/", userVerification)

export default router