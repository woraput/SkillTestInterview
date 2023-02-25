import React, {
  FormEvent,
  ChangeEvent,
  useState,
  useContext,
  KeyboardEvent,
} from "react";
import { AuthContext, UserRegister } from "../context/AuthenProvider";
import { GENDER_DDL } from "../share/DDL";

import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

type Props = {};

const Register = (props: Props) => {
  const authProvider = useContext(AuthContext);

  const initialFormRegister: UserRegister = {
    gender: "",
    firstName: "",
    lastName: "",
    address: "",
    postcode: "",
    email: "",
    password: "",
    tel: "",
    isAccept: false,
  };

  const RegisterSchema = yup.object().shape({
    gender: yup
      .number()
      .required("Gender is Required")
      .oneOf([0, 1], "Gender is Required"),
    firstName: yup.string().required("First Name is Required"),
    lastName: yup.string().required("Last Name is Required"),
    address: yup.string().required("Address is Required"),
    postcode: yup.string().required("Postcode is Required"),
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
    // confirmPassword: yup
    //   .string()
    //   .min(3, "Please Enter less then 3 letters")
    //   .required("Confirm Password is required.")
    //   .oneOf([yup.ref("password")], "Passwords must match"),
    tel: yup
      .string()
      .required("Telephone Number is required.")
      .matches(/^(\+66|66|0)\d{9}$/, {
        message: "Please enter a valid Thai phone number",
        excludeEmptyString: true,
      }),
    isAccept: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  const handleSubmit = (formValue: UserRegister) => {
    console.log(
      "🚀 ~ file: Register.tsx:107 ~ handleSubmit ~ formValue:",
      formValue
    );

    authProvider?.registerUser(formValue);
  };

  const onlyNumber = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!/^\d+$/.test(event.key)) {
      event.preventDefault();
    }
    return event.currentTarget.value;
  };

  return (
    <div className="container-fluid p-4 h-full flex align-middle justify-center bg-[#e8e8e8]">
      <div className="flex flex-col justify-center w-[350px]">
        <h1 className=" text-center">Register</h1>
        <Formik
          initialValues={initialFormRegister}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={"flex flex-col gap-2  "}>
              <div className="grid grid-cols-3 align-middle gap-2">
                <div className={"flex flex-col "}>
                  <label>Gender</label>
                  <Field
                    name="gender"
                    as="select"
                    className={`form-input ${
                      touched.gender
                        ? errors.gender
                          ? "invalid"
                          : "valid"
                        : ""
                    }`}
                  >
                    <option aria-readonly>Select..</option>
                    {GENDER_DDL.map((it) => (
                      <option key={it?.value} value={it?.value}>
                        {it?.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    component="div"
                    name="gender"
                    className="msg-error"
                  />
                </div>

                <div className={"flex flex-col "}>
                  <label>Firstname</label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Input Firstname"
                    className={`form-input ${
                      touched.firstName
                        ? errors.firstName
                          ? "invalid"
                          : "valid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="firstName"
                    className="msg-error"
                  />
                </div>

                <div className={"flex flex-col "}>
                  <label>Lastname</label>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Input Lastname"
                    className={`form-input ${
                      touched.lastName
                        ? errors.lastName
                          ? "invalid"
                          : "valid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="lastName"
                    className="msg-error"
                  />
                </div>
              </div>

              <label>Address</label>
              <Field
                name="address"
                as="textarea"
                placeholder="Input Address"
                className={`form-input ${
                  touched.address ? (errors.address ? "invalid" : "valid") : ""
                }`}
                rows={2}
              />
              <ErrorMessage
                component="div"
                name="address"
                className="msg-error"
              />

              <div className={"grid grid-cols-2 align-middle gap-2"}>
                <div className={"flex flex-col "}>
                  <label>Postcode</label>
                  <Field
                    type="number"
                    name="postcode"
                    placeholder="Input Postcode"
                    className={`form-input ${
                      touched.postcode
                        ? errors.postcode
                          ? "invalid"
                          : "valid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="postcode"
                    className="msg-error"
                  />
                </div>

                <div className={"flex flex-col "}>
                  <label>Telephone</label>
                  <Field
                    type="tel"
                    name="tel"
                    placeholder="Input Phone Number"
                    className={`form-input ${
                      touched.tel ? (errors.tel ? "invalid" : "valid") : ""
                    }`}
                    onKeyPress={onlyNumber}
                  />
                  <ErrorMessage
                    component="div"
                    name="tel"
                    className="msg-error"
                  />
                </div>
              </div>

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

              {/* <label>Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Input Password"
                className={`form-input  ${
                  touched.confirmPassword
                    ? errors.confirmPassword
                      ? "invalid"
                      : "valid"
                    : ""
                }`}
              />

              <ErrorMessage
                component="div"
                name="confirmPassword"
                className="msg-error"
              /> */}

              <div className="flex gap-2 align-middle">
                <Field id="accectT&C" type="checkbox" name={"isAccept"} />
                <label htmlFor="accectT&C">Accept terms and conditions</label>
              </div>
              <ErrorMessage
                component="div"
                name="isAccept"
                className="msg-error"
              />

              <div className={"flex gap-4 align-middle justify-center mt-2"}>
                <button type="submit" className="btn-primary w-[100%]">
                  register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
