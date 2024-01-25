import React from "react";

const Links = (enlaces) => {
  return (
    <div>
      <a href={enlaces.text} alt={enlaces.url}></a>
    </div>
  );
};

export default Links;
