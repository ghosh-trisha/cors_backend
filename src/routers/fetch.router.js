
import express from "express";
const router = express.Router();
import {fetchController , downloadController} from "../controllers/fetch.controller.js";

router.get("/fetch/:folder_id", fetchController);

router.get("/download/:folder_id/:file_name", downloadController);

export default router;