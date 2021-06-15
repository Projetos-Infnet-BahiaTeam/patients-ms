import { Router } from "express";

import patientsRouter from "./patientsRouter";

const routes = Router();

routes.use("/api/patients", patientsRouter);

export default routes;
