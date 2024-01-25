import React from "react";
import Carta from "../Carta";

const Gallery = ({ foto }) => {
  return (
    <>
      <div className="galeria">
        {foto.map((item, index) => (
          <div key={index}>
            <Carta elemento={item}></Carta>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
