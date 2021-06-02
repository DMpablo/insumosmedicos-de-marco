import React, { Fragment } from "react";
import "./Form.scss";

function Form({ dataBuyer, setDataBuyer }) {
 

  const formId = [
    { id: "name", type: "text", placeholder: "escribe tu nombre / apodo" },
    { id: "phone", type: "Number", placeholder: "Un telefono de contacto" },
    { id: "email", type: "email", placeholder: "tu email" },
    { id: "email2", type: "email", placeholder: "otra vez tu email" },
  ];

  const handleForm = (id, value) => {
    const newDataBuyer = { ...dataBuyer, [id]: value };
    setDataBuyer(newDataBuyer);
  };

  return (
    <Fragment>
      <h2 className="title_form">Carga tus datos para finalizar la compra!</h2>
      <form>
        {formId.map((e) => (
          <div key={e.id}>
            <label htmlFor={e.id}>
              {e.id}:
              <input
                id={e.id}
                type={e.type}
                onChange={({ target }) => handleForm(e.id, target.value)}
                placeholder={e.placeholder}
              />
            </label>
          </div>
        ))}
      </form>
    </Fragment>
  );
}

export default Form;
