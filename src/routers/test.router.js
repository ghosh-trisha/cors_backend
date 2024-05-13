
import testMiddleware from "../middlewares/test.middleware.js";
import testController from "../controllers/test.controller.js";

import express from "express";
const router = express.Router();


router.use(testMiddleware);
router.get("/this", testController);

export default router;