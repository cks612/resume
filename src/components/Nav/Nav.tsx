import React from "react";
import styled from "styled-components";
import { devices } from "../../styles/_MediaQueryStyles";

const Nav = () => {
  return <NavHeader></NavHeader>;
};

export default Nav;

const NavHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 30px;
  z-index: 100;

  @media ${devices.mobileL} {
    display: none;
  }
`;
