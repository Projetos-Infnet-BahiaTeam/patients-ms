const patients = [
    {
      _id: "606c9f1abb5c011b7ace8f5f",
      nome: "Fulano",
      cpf: "111.111.111-11",
      celular: "(11) 11111-1111)",
      sexo: "Indefinido",
      dt_nasc: new Date("2021-02-21T00:00:00Z"),
    },
    {
        _id: "616c9f1abb5c011b7ace8f5f",
        nome: "Ciclano",
        cpf: "222.222.222-22",
        celular: "(22) 22222-2222)",
        sexo: "Indefinido",
        dt_nasc: new Date("2021-02-21T00:00:00Z"),
      },
      {
        _id: "626c9f1abb5c011b7ace8f5f",
        nome: "Carinha",
        cpf: "333.333.333-33",
        celular: "(33) 33333-3333)",
        sexo: "Indefinido",
        dt_nasc: new Date("2021-02-21T00:00:00Z"),
      },
  ];
  
  export function getAllPatients() {
    return patients;
  }
  
  export function getPatientByID(id) {
    if (id == -1) return null;
  
    patients[0]._id = id;
    return patients[0];
  }
  
  export function addPatient(patient) {
    return patients[0];
  }
  
  export function deletePatient(id) {
    if (!id) throw new Error("Não foi possivel excluir esse paciente!");
    return true;
  }
  
  