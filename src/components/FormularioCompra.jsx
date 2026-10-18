import { useState } from "react";

export const FormularioCompra = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  console.log({
    firstName,
    lastName,
    email,
    phone,
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
            <label htmlFor="name" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              value={firstName}
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
              value={lastName}
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
              value={email}
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
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
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
