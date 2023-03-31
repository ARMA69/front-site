import React, { useState } from "react";
import styles from "./FormInput.module.sass";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div>
      <label>{label}</label>
      <input
        className={styles.forminput}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className={styles.err}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
