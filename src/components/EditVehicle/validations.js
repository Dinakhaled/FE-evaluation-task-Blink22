import * as Yup from "yup";

const VALIDATION_SCHEMA = Yup.object().shape({
  vehicle: Yup.string().required("Field is required!"),
  totalKm: Yup.number()
    .typeError("Field should be a number!")
    .positive("Field should be a positive number!")
    .required("Field is required!"),
  volume: Yup.number()
    .typeError("Field should be a number!")
    .positive("Field should be a positive number!")
    .required("Field is required!"),
});

export { VALIDATION_SCHEMA };
