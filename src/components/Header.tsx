import React, { ReactNode, useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { AuthContext } from "../context/AuthenProvider";

type Props = {};

const WrapperStyle = styled.div``;

const Header = (props: Props) => {
  const authProvider = useContext(AuthContext);
  return (
    <WrapperStyle>
      <nav className="p-4  flex align-middle gap-4  bg-cyan-50">
        <h3 className="font-bold">Skills Test</h3>

        {authProvider?.dataProvider?.isAuthen === true ? (
          <div className={" ml-16 flex align-middle gap-4"}>
            <CustomNavLink to="home">Home</CustomNavLink>
            <CustomNavLink to="playground">Playground</CustomNavLink>
          </div>
        ) : (
          ""
        )}
      </nav>
    </WrapperStyle>
  );
};

export default Header;

type CustomNavLinkProps = {
  to: string;
  children: ReactNode;
};

const CustomNavLink = ({ to, children }: CustomNavLinkProps) => (
  <NavLink
    className={({ isActive }) =>
      isActive ? "underline underline-offset-4" : undefined
    }
    to={to}
  >
    {children}
  </NavLink>
);
