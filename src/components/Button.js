import React from "react";

const Button = (props) => {
  return (
    <button style={{ marginTop: "50px" }} onClick={props.onclick}>
      Pobierz 5
    </button>
  );
};
export default Button;
