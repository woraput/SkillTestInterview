import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { AuthContext } from "../context/AuthenProvider";

type Props = {};

export type UserLogin = {
  email: string;
  password: string;
};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const authProvider = useContext(AuthContext);

  const initialFormLogin: UserLogin = {
    email: "",
    password: "",
  };

  const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid Format Email")
      .required("Email is Required"),
    password: yup
      .string()
      .required("Password is Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const handleSubmit = (formValue: UserLogin) => {
    console.log("🚀 ~ file: Login.tsx:59 ~ handleSubmit ~ :", formValue);
    authProvider?.login(formValue);
  };

  const registerUser = () => {
    navigate("register");
  };

  return (
    <div className="container-custom">
      <div className="flex flex-col justify-center w-[400px] h-auto">
        <div className="py-10 px-16 bg-white rounded-2xl">
          <h1 className="text-center mb-8">Login User</h1>
          <Formik
            initialValues={initialFormLogin}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className={"flex flex-col gap-2"} autoComplete="off">
                <label>Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Input Email"
                  className={`form-input ${
                    touched.email ? (errors.email ? "invalid" : "valid") : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="msg-error"
                />
                <label>Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Input Password"
                  className={`form-input  ${
                    touched.password
                      ? errors.password
                        ? "invalid"
                        : "valid"
                      : ""
                  }`}
                />

                {/* case no autoComplete */}
                {/* <Field
                  name="password"
                  component={() => (
                    <input
                      className={`form-input  ${
                        touched.password
                          ? errors.password
                            ? "invalid"
                            : "valid"
                          : ""
                      }`}
                      placeholder="Input Password"
                      type="password"
                      autoComplete="new-password"
                    />
                  )}
                /> */}
                <ErrorMessage
                  component="div"
                  name="password"
                  className="msg-error"
                />
                <div
                  className={
                    "flex flex-col gap-4 align-middle justify-between mt-4"
                  }
                >
                  <button type="submit" className="btn-primary">
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn-primary-outline "
                    onClick={() => registerUser()}
                  >
                    Register
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
