import React, { Fragment } from "react";
import "./Form.scss";

function Form({dataBuyer, setDataBuyer }) {
  const formId = [
    { id: "name", type: "text" },
    { id: "phone", type: "Number" },
    { id: "email", type: "email" },
  ];

  const handleForm = (id, value) => {
    const newDataBuyer = { ...dataBuyer, [id]: value };
    setDataBuyer(newDataBuyer);
  };


  return (
    <Fragment>
      <h2 className="title_form">Carga los datos para finalizar tu orden!</h2>
      <form>
        {formId.map((e) => (
          <div key={e.id}>
            <label  htmlFor={e.id}>
              {e.id}:
              <input
                id={e.id}
                type={e.type}
                onChange={({ target }) => handleForm(e.id, target.value)}
              />
            </label>
          </div>
        ))}
      </form>
    </Fragment>
  );
}

export default Form;
