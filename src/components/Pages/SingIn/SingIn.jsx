import React from "react";
import { SCHEMA } from "../../Validations/loginValidations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./SingIn.module.sass";

const initialState = {
  login: "",
  password: "",
};

function SingIn(props) {
  return (
    <>
      <div className={styles.singin}>
        <h1 className={styles.firstone}>Log in to Project Banana</h1>
        <Formik
          initialValues={initialState}
          validationSchema={SCHEMA}
          onSubmit={async (values, actions) => {
            await new Promise((resolve) => setTimeout(resolve, 250));
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
          }}
          className={styles.singin}
        >
          {(formikProps) => {
            return (
              <Form className={styles.form}>
                <p> Login: </p>
                <Field
                  name="login"
                  placeholder="Enter you login"
                  className={styles.first}
                />
                <ErrorMessage
                  name="login"
                  component="p"
                  style={{ color: "red", fontSize: "21px" }}
                />
                <p> Password: </p>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  style={{ color: "red", fontSize: "21px" }}
                />
                <button value="submit"> Welcome </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default SingIn;
