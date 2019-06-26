import { Router } from "express";
import ExchangeController from "../controller/ExchangeController";

const router = Router();

router.get("/:moneda", ExchangeController.getOne);

export default router;