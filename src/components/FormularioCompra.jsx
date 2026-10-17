import { useState } from "react";

export const FormularioCompra = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="row g-4">
      <div className="col-md-7">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              value={firstName}
              onChange={(evento) => setFirstName(evento.target.value)}
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
              value={lastName}
              onChange={(evento) => setLastName(evento.target.value)}
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
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
