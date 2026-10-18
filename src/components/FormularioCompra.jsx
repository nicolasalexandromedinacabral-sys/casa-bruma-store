import { useState } from "react";
import { data } from "react-router-dom";

export const FormularioCompra = () => {
  //const [firstName, setFirstName] = useState("");
  //const [lastName, setLastName] = useState("");
  //const [email, setEmail] = useState("");
  //const [phone, setPhone] = useState("");
  //const [modality, setModality] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    modality: "",
  });
  console.log({
    firstName,
    lastName,
    email,
    phone,
    modality,
  });

  const handleSubmmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("handleSubmmit");
  };

  return (
    <div className="row g-4">
      <div className="col-md-7">
        <form onSubmit={handleSubmmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Apellidos
            </label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              className="form-control"
              value={formData.lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Télofono
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={(event) => setPhone(event.target.value)}
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
              onChange={(event) => setModality(event.target.value)}
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
