import Patient from "../schemas/Patient";
import AppError from "../errors/AppError";

class UpdatePatientService {
  async execute(
    id,
    newNome,
    newCpf,
    newCelular,
    newEmail,
    newSexo,
    newDt_nasc
  ) {
    const patient = await Patient.findById(id);

    if (!patient) throw new AppError("Consulta não existe", 400);

    await Patient.updateOne(patient, {
      nome: newNome,
      cpf: newCpf,
      celular: newCelular,
      email: newEmail,
      sexo: newSexo,
      dt_nasc: newDt_nasc,
    });

    return true;
  }
}

export default UpdatePatientService;
