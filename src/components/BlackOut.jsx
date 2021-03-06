import React, { useState } from "react";

function BlackOut() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className="BlackOut">
          <h1 style={{ marginTop: "10px", textAlign: "center" }}>
            Qualabs - Prueba Técnica - Manuel Garderes
          </h1>
          <h3 style={{ marginTop: "10px", textAlign: "center" }}>
            Front End - React App
          </h3>
          <p style={{ marginTop: "10px", textAlign: "center" }}>
            Dentro de la aplicación puedes navegar por los diferentes módulos y
            se mostrarán la lista de usuarios que lo usan.
          </p>
          <p style={{ marginTop: "10px", textAlign: "center" }}>
            El diseño está basado 100% en el mock entregado.
          </p>
          <p style={{ marginTop: "10px", textAlign: "center" }}>
            Los 4 botones de la parte inferior son solo visuales, no entran
            dentro de las funcionalidades de la aplicación.
          </p>
          <p style={{ marginTop: "10px", textAlign: "center" }}>
            <a target={"_blank"} style={{color:"white"}} href="https://github.com/manugarderes/Qualabs-Prueba-Tecnica">Repositorio en GitHub</a>
          </p>
          <button onClick={() => setShow(false)} style={{ marginTop: "30px" }}>
            Aceptar
          </button>
        </div>
      )}
    </>
  );
}

export default BlackOut;
