import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    celular: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    sexo: {
      type: String,
      required: true,
    },
    dt_nasc: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Patient", PatientSchema);
