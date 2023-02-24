import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

type Props = {};

const WrapperStyle = styled.div``;

const Header = (props: Props) => {
  return (
    <WrapperStyle>
      <nav className={"p-4 bg-slate-100 flex align-middle gap-4"}>
        <Link to="/">Login</Link>
        <Link to="home">Home</Link>
      </nav>
    </WrapperStyle>
  );
};

export default Header;
