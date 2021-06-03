import Patient from "../schemas/Patient";

//[] CHECK IF THERES ANOTHER APPOINTMENT IN THE SAME DATE/TIME
class CreatePatientService {
  async execute(nome, cpf, celular, email, sexo, dt_nasc) {
    const patient = await Patient.create({
      nome,
      cpf,
      celular,
      email,
      sexo,
      dt_nasc,
    });

    return patient;
  }
}

export default CreatePatientService;
