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
    email: yup.string().email("Invalid email").required("Email is Required"),
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

  // design form login input email password use tailwindcss

  return (
    <div className="container-fluid p-4 h-full flex align-middle justify-center bg-[#e8e8e8]">
      <div className="flex flex-col justify-center w-[300px]">
        <Formik
          initialValues={initialFormLogin}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={"flex flex-col gap-2  "}>
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
  );
};

export default Login;
