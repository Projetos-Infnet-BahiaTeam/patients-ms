import { Router } from "express";

import Patient from "../schemas/Patient";
import CreatePatientService from "../services/CreatePatientService";
import DeletePatientService from "../services/DeletePatientService";
import UpdatePatientService from "../services/UpdatePatientService";

const patientsRouter = Router();

patientsRouter.get("/", async (req, res) => {
  try {
    const patients = await Patient.find({});

    if (!patients) return res.json({ message: "Empty database." });

    return res.json(patients);
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
});

patientsRouter.post("/", async (req, res) => {
  try {
    const { nome, cpf, celular, email, sexo, dt_nasc } = req.body;
    const CreatePatient = new CreatePatientService();
    const Patient = CreatePatient.execute(
      nome,
      cpf,
      celular,
      email,
      sexo,
      dt_nasc
    );

    return res.json(Patient);
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
});

patientsRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const DeletePatient = new DeletePatientService();
    await DeletePatient.execute(id);

    return res.json({ message: "Paciente deletada com sucesso" });
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
});

patientsRouter.put("/", async (req, res) => {
  try {
    const { id, newNome, newCpf, newCelular, newEmail, newSexo, newDt_nasc } =
      req.body;

    const UpdatePatient = new UpdatePatientService();
    await UpdatePatient.execute(
      id,
      newNome,
      newCpf,
      newCelular,
      newEmail,
      newSexo,
      newDt_nasc
    );

    return res.json({ message: "Paciente modificado com sucesso" });
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
});

export default patientsRouter;
