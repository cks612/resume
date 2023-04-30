import styled from "styled-components";
import * as S from "../../styles/_CommonCssStyles";
import { PersonalInfo } from "../../components/Info";
import { Introduce } from "../../components/Introduce";
import { devices } from "../../styles/_MediaQueryStyles";
import SkillsPartIndex from "../../components/Skills";
import { ExperiencePartIndex } from "../../components/Experience";

const Main = () => {
  return (
    <MainWrapper>
      <a href="https://github.com/cks612" target="_blank" rel="noreferrer">
        <MainHeaderImg />
      </a>
      {/* Personal Information Part */}
      <PersonalInfo />

      {/* Introduce Part */}
      <Introduce />

      {/* Skills Part */}
      <SkillsPartIndex />

      {/* Experience Part */}
      <ExperiencePartIndex />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  max-width: 950px;
  width: 100%;
  padding: 15px 15px;
  margin: 0 auto;
  line-height: 1.8;
`;

const MainHeaderImg = styled.div`
  ${S.commonBorderBackSize}
  position: absolute;
  right: 0;
  top: 0;
  width: 149px;
  height: 149px;
  background-image: url("https://camo.githubusercontent.com/25f9d37196ab6f1073589ea5ffc871515d2e56e35ecd546514a0c8d6ac293d76/687474703a2f2f692e696d6775722e636f6d2f6833757477494b2e706e67");

  @media ${devices.mobileL} {
    width: 5rem;
    height: 5rem;
    z-index: -1;
  }
`;
