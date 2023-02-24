import React, { FormEvent, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

type Props = {};

type UserLogin = {
  email: string;
  password: string;
};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const initialFormLogin: UserLogin = {
    email: "",
    password: "",
  };
  const [formLogin, setFormLogin] = useState<UserLogin>(initialFormLogin);

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setFormLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValid = (): boolean => {
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValid()) {
      setFormLogin(initialFormLogin);
      navigate("home");
    }
  };

  const registerUser = () => {
    navigate("register");
  };

  return (
    <div className="container-fluid p-4 h-full flex align-middle justify-center bg-[#e8e8e8]">
      <div className="flex flex-col   justify-center">
        <form onSubmit={handleSubmit} className={"flex flex-col gap-2  "}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formLogin?.email}
            onChange={(e) => handleChangeForm(e)}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formLogin?.password}
            onChange={(e) => handleChangeForm(e)}
          />

          <div className={"flex gap-4 align-middle justify-between"}>
            <button type="submit">Login</button>
            <button type="button" onClick={() => registerUser()}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
