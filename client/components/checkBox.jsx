import React from "react";

const CheckBox = (props) => {


  return (
    <div className="checkBox">
        <input type="checkbox" id={props.key} name={props.name} value={props.name} onClick={props.checkedBoxes}/>
        <label for="vehicle3">{props.name}</label>
    </div>
  );
};

export default CheckBox;