import React, { useState } from "react";

export const TareaClase = () => {
  //const [text, setText] = useState("");
  const vocales = ["a", "e", "i", "o", "u"];

  function handleOnkyDown(e) {
    console.log(e.key);
    //const vocalInput = e.key;
  vocales.find((i) => (i === e.key) ? (console.log('es vocal')) : (console.log('no es vocal')) )
  
  }

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleOnkyDown}
        placeholder="te quito las vocales al texto"
      />
    </div>
  );
};

export default TareaClase;
