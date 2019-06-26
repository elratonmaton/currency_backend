import { Router, Request, Response } from "express";

import divisas from "./exchange";

const routes = Router();

routes.use("/cotizacion", divisas);

export default routes;