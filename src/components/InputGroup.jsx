import React from "react";

const InputGroup = ({
  labelClass,
  labelText,
  inputClass,
  inputType = "text",
  inputId,
  action
}) => {
  return (
    <div className="input_group">
      <label htmlFor={inputId} className={labelClass}/>{labelText}
      <input
        type={inputType}
        id={inputId}
        className={inputClass}
        onChange={action}
      />
    </div>
  );
};

export default InputGroup;
