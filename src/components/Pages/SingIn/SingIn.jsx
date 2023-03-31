import React, { useState } from "react";
import FormInput from "../../Ui/FormInput";
import styles from "./SingIn.module.sass";

function SingIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 2));
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className={styles.singin}>
        <form onSubmit={handleSubmit} className={styles.formin}>
          <h1 style={{ textAlign: "center" }}>Login </h1>
          {inputs.map((input) => (
            <FormInput
              key={input.key}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className={styles.inbtn}>Login</button>
        </form>
      </div>
    </>
  );
}

export default SingIn;
