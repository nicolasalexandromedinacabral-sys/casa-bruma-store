import { useState } from "react";

const validate = (data) => {
  const newErrors = {};
  if (data.firstName === "") {
    newErrors.firstName = "El nombre es obligatorio";
  } else if (data.firstName.length > 50) {
    newErrors.firstName = "El nombre es demasiado largo";
  }
  if (data.lastName === "") newErrors.lastName = "El apellido es obligatorio";

  if (data.email === "") {
    newErrors.email = "El email es obligatorio";
  } else if (!data.email.includes("@")) {
    newErrors.email = "El email no es valido";
  }

  return newErrors;
};

export const FormularioCompra = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    modality: "",
  });

  const [errors, setErrors] = useState({});

  console.log(formData);

  const handleChange = (event) => {
    console.log("handleChange", {
      value: event.target.value,
      name: event.target.name,
    });
    console.log(event.target.value);

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario por enviar");

    const newErrors = validate(formData);

    setErrors(newErrors);

    console.log(newErrors);
    console.log(Object.keys(newErrors));
    if (Object.keys(newErrors).length > 0) {
      console.log("Complete los campos faltantes");
      return;
    }

    console.log("Formulario Enviado!");
  };

  console.log(errors);

  return (
    <div className="row g-4">
      <div className="col-md-7">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="invalid-feedback d-block">{errors.firstName}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Apellidos
            </label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className="invalid-feedback d-block">{errors.lastName}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback d-block">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="modality" className="form-label">
              Modalidad
            </label>
            <select
              name="modality"
              id="modality"
              value={formData.modality}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Elegí una opción</option>
              <option value="presencial">Presencial</option>
              <option value="virtual">Virtual</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <button type="button" className="btn btn-secondary">
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};
