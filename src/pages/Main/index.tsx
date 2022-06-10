import styled from "styled-components";
import SkillsPart from "../../components/Skills";
import * as C from "../../styles/CommonCssStyles";
import * as S from "../../styles/SkillsStyle";
import {
  FRONT_END_SKILLS,
  DEVOPS_SKILLS,
  COLLABORATION_TOOLS,
} from "../../constants/data";
import { PersonalInfo } from "../../components/Info";
import { Introduce } from "../../components/Introduce";

const Main = () => {
  return (
    <>
      <MainWrapper>
        <a href="https://github.com/cks612" target="_blank" rel="noreferrer">
          <MainHeaderImg />
        </a>

        {/* Personal Information Part */}
        <PersonalInfo />

        {/* Introduce Part */}
        <Introduce />

        {/* Skills Part */}
        <S.SkillsContainer>
          <S.SkillsSubject>
            <S.SkillsContainerHeader>
              <S.SkillsContainerHeaderName>
                <h2>
                  <span>SKILL</span>
                  <small>
                    <i className="fa-solid fa-circle-question" />
                    <div>
                      <p> 1 : 기초수준</p>
                      <p> 2 : 취미 개발 수준 및 공부중</p>
                      <p> 3 : Production 개발 가능</p>
                    </div>
                  </small>
                </h2>
              </S.SkillsContainerHeaderName>
            </S.SkillsContainerHeader>
          </S.SkillsSubject>

          <SkillsPart
            LISTDATA={FRONT_END_SKILLS}
            title="Front-End"
            Boolean={true}
          ></SkillsPart>
          <SkillsPart
            LISTDATA={DEVOPS_SKILLS}
            title="DevOps"
            Boolean={true}
          ></SkillsPart>
          <SkillsPart
            LISTDATA={COLLABORATION_TOOLS}
            title="Collaboration & Tools"
            Boolean={false}
          ></SkillsPart>
        </S.SkillsContainer>

        {/* Project Part */}
      </MainWrapper>
    </>
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
  ${C.commonBorderBackSize}
  position: absolute;
  right: 0;
  top: 10px;
  width: 149px;
  height: 149px;
  background-image: url("https://camo.githubusercontent.com/25f9d37196ab6f1073589ea5ffc871515d2e56e35ecd546514a0c8d6ac293d76/687474703a2f2f692e696d6775722e636f6d2f6833757477494b2e706e67");
`;
