import React from "react";

const Promotion = ({ promocion }) => {
  return (
    <>
      <div className="promocopnes">
        <p>{promocion.day}</p>
        <h1>{promocion.title}</h1>
        <p>{promocion.discount}</p>
      </div>
      <div className="fondo">
        <img src={promocion.background} alt="fondo" />
      </div>
    </>
  );
};

export default Promotion;
