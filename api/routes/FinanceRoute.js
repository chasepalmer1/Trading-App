import { GetStockInfo } from "../controllers/FInanceController";


const router = express.Router();

router.post('/quote', GetStockInfo)

export default router