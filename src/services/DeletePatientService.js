import Patient from "../schemas/Patient";
import AppError from "../errors/AppError";

class DeletePatientService {
  async execute(id) {
    const patient = await Patient.findById(id);

    if (!patient) throw new AppError("Consulta não existe", 400);

    await Patient.deleteOne(patient);

    return true;
  }
}

export default DeletePatientService;
