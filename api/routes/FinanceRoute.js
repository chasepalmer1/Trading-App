import { GetStockInfo } from "../controllers/FInanceController.js";

const router = express.Router();

router.post('/quote', GetStockInfo)

export default router