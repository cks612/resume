import React from "react";
import styled from "styled-components";

const Nav = () => {
  return <NavHeader></NavHeader>;
};

export default Nav;

const NavHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.mainColor};
  z-index: 100;
`;
