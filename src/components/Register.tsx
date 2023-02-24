import React, { FormEvent, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { GENDER_DDL } from "../share/DDL";

type Props = {};

export type UserRegister = {
  gender: number | null;
  firstName: string;
  lastName: string;
  address: string;
  postcode: number | null;
  email: string;
  password: string;
  tel: number | null;
  isAccept: boolean;
};

const Register = (props: Props) => {
  const navigate = useNavigate();
  const initialFormRegister: UserRegister = {
    gender: null,
    firstName: "",
    lastName: "",
    address: "",
    postcode: null,
    email: "",
    password: "",
    tel: null,
    isAccept: false,
  };
  const [formRegister, setFormRegister] =
    useState<UserRegister>(initialFormRegister);

  console.log(
    "🚀 ~ file: Register.tsx:34 ~ Register ~ formRegister:",
    formRegister
  );

  const handleChangeForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeFormNumber = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    setFormRegister((prev) => ({
      ...prev,
      [name]: parseInt(value),
    }));
  };

  const handleChangeFormSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    let { name, value } = e.target;

    setFormRegister((prev) => ({
      ...prev,
      [name]: parseInt(value),
    }));
  };

  const isValid = (): boolean => {
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValid()) {
      setFormRegister(initialFormRegister);
      navigate("/home");
    }
  };

  return (
    <div className="container-fluid p-4 h-full flex align-middle justify-center bg-[#e8e8e8]">
      <div className="flex flex-col justify-center w-[350px]">
        <h1 className="text-4xl text-center mb-5 font-bold">Register</h1>
        <form onSubmit={handleSubmit} className={"flex flex-col gap-2  "}>
          <div className={"grid grid-cols-3 align-middle gap-2"}>
            <div className={"flex flex-col "}>
              <label>Gender</label>
              <select
                name="gender"
                value={formRegister?.gender as number}
                onChange={(e) => handleChangeFormSelect(e)}
              >
                <option aria-readonly>select..</option>
                {GENDER_DDL.map((it) => (
                  <option key={it?.value} value={it?.value}>
                    {it?.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={"flex flex-col "}>
              <label>Firstname</label>
              <input
                type="text"
                name="firstName"
                value={formRegister?.firstName}
                onChange={(e) => handleChangeForm(e)}
              />
            </div>

            <div className={"flex flex-col "}>
              <label>Lastname</label>
              <input
                type="text"
                name="lastName"
                value={formRegister?.lastName}
                onChange={(e) => handleChangeForm(e)}
              />
            </div>
          </div>
          <div className={"grid grid-cols-3 align-middle gap-2"}></div>

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formRegister?.email}
            onChange={(e) => handleChangeForm(e)}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formRegister?.password}
            onChange={(e) => handleChangeForm(e)}
          />

          <label>Address</label>
          <textarea
            name="address"
            value={formRegister?.address}
            rows={2}
            onChange={(e) => handleChangeForm(e)}
          />

          <div className={"grid grid-cols-2 align-middle gap-2"}>
            <div className={"flex flex-col "}>
              <label>Postcode</label>
              <input
                type="number"
                name="postcode"
                value={formRegister?.postcode as number}
                onChange={(e) => handleChangeFormNumber(e)}
              />
            </div>

            <div className={"flex flex-col "}>
              <label>Telephone</label>
              <input
                type="tel"
                name="tel"
                value={formRegister?.tel as number}
                onChange={(e) => handleChangeFormNumber(e)}
              />
            </div>
          </div>

          <div className="flex gap-2 align-middle">
            <input
              id="accectT&C"
              type="checkbox"
              name={"isAccept"}
              checked={formRegister?.isAccept}
              onChange={(e) => handleChangeForm(e)}
            />
            <label htmlFor="accectT&C">Accept terms and conditions</label>
          </div>

          <div className={"flex gap-4 align-middle justify-center mt-2"}>
            <button
              type="submit"
              className="border-1  border-solid border-cyan-50 "
            >
              register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
