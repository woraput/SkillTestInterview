import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

type Props = {};

const WrapperStyle = styled.div`
  ul {
    margin: 10px;
  }
`;

const Header = (props: Props) => {
  return (
    <WrapperStyle>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="home">Home</Link>
        </li>
      </ul>
    </WrapperStyle>
  );
};

export default Header;
