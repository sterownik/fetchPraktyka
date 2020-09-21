import React from "react";

const AddPerson = (props) => {
  return (
    <button
      style={{
        margin: "50px",
        height: "60px",
        width: "120px",
        backgroundColor: "#1d3557",
        border: "null",
        color: "#f1faee",
      }}
      onClick={props.onclick}
    >
      Dodaj osobę
    </button>
  );
};
export default AddPerson;
