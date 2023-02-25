import React, { createContext, ReactNode, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { UserLogin } from "../components/Login";

type Props = {
  children: ReactNode;
};

export type AuthContextType = {
  dataProvider: AuthData;
  login: (userLogin: UserLogin) => void;
  logout: () => void;
  registerUser: (newUser: UserRegister) => void;
};

export type AuthData = {
  isAuthen: boolean;
  userLogined: UserRegister | {};
  users: UserRegister[];
};

export type UserRegister = {
  gender: number | string;
  firstName: string;
  lastName: string;
  address: string;
  postcode: number | string;
  email: string;
  password: string;
  tel: number | string;
  isAccept: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthenProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [authenDataProvider, setAuthenDataProvider] = useState<AuthData>({
    isAuthen: false,
    userLogined: {},
    users: [],
  });

  const login = (userLogin: UserLogin) => {
    try {
      const haveUserRegisted: UserRegister | undefined =
        authenDataProvider!.users?.find((it) => it.email === userLogin.email);

      if (!haveUserRegisted) {
        throw new Error("Email or Password incorrect, Please try again");
      } else {
        if (haveUserRegisted?.password === userLogin?.password) {
          setAuthenDataProvider((prev) => ({
            ...prev,
            userLogined: haveUserRegisted,
            isAuthen: true,
          }));

          return navigate("home");
        } else throw new Error("Email or Password incorrect, Please try again");
      }
    } catch (error) {
      alert(error);
    }
  };

  const logout = () => {
    setAuthenDataProvider((prev) => ({
      ...prev,
      userLogined: {},
      isAuthen: false,
    }));
    navigate("/");
  };

  const registerUser = (newUser: UserRegister) => {
    try {
      const rawUserList = [...authenDataProvider!.users];
      const isEmailExist = rawUserList.some(
        (user) => user.email === newUser.email
      );
      if (isEmailExist) {
        throw new Error("This Email already exict");
      }
      newUser.gender = newUser?.gender as number;
      let newArr: UserRegister[] = [...rawUserList, newUser];

      setAuthenDataProvider((prev: AuthData) => ({
        ...prev,
        users: newArr,
      }));

      alert("Register Successful");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        dataProvider: authenDataProvider,
        login,
        logout,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenProvider;
