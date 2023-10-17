import { GetStockInfo } from "../controllers/FinanceController.js";
import express from "express";


const router = express.Router();

router.post('/quote', GetStockInfo)

export default router