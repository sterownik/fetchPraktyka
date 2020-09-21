import React from "react";

const AddPerson = (props) => {
  return (
    <button
      style={{ margin: "50px", height: "60px", width: "120px" }}
      onClick={props.onclick}
    >
      Dodaj osobę
    </button>
  );
};
export default AddPerson;
