import { Router } from "express";

import patientsRouter from "./patientsRouter";

const routes = Router();

routes.use("/patients", patientsRouter);

export default routes;
