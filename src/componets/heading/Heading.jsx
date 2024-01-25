import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="heading">
      <a href={text.url} target="_blank">
        {text.text}
      </a>
    </div>
  );
};

export default Heading;
