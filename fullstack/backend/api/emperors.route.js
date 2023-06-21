import express from "express";
import EmperorController from './emperors.controller.js'

const router = express.Router();

router.route("/:id").get(EmperorController.apiGetEmperor)
router.route("/").get(EmperorController.apiGetAllEmperor)



export default router;
