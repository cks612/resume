import styled from "styled-components";
import SkillsPart from "../../components/Skills";
import * as C from "../../styles/CommonCssStyles";
import * as S from "../../styles/SkillsStyle";
import * as E from "../../styles/ExperienceStyle";
import * as D from "../../constants/data";
import { PersonalInfo } from "../../components/Info";
import { Introduce } from "../../components/Introduce";
import { Experience } from "../../components/Experience";

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
            LISTDATA={D.FRONT_END_SKILLS}
            title="Front-End"
            Boolean={true}
          ></SkillsPart>
          <SkillsPart
            LISTDATA={D.BACK_END_SKILLS}
            title="Back-End"
            Boolean={true}
          ></SkillsPart>
          <SkillsPart
            LISTDATA={D.DEVOPS_SKILLS}
            title="DevOps"
            Boolean={true}
          ></SkillsPart>
          <SkillsPart
            LISTDATA={D.COLLABORATION_TOOLS}
            title="Collaboration & Tools"
            Boolean={false}
          ></SkillsPart>
        </S.SkillsContainer>

        {/* Project Part */}

        <E.ExperienceContainer>
          <E.ExperienceSubject>
            <E.ExperienceContainerHeaderName>
              <h2>
                <span>EXPERIENCE</span>
              </h2>
            </E.ExperienceContainerHeaderName>
          </E.ExperienceSubject>
        </E.ExperienceContainer>

        <Experience
          startDate="2022.05.16"
          endDate="2022.06.16"
          going="진행중"
          period="1개월"
          title="머치스퀘어"
          subTitle="1달간 기업협업에 인턴으로 참여하여 실무 개발 프로젝트를 진행 "
          Boolean={true}
          experienceDataList={D.CORPORATE_COOPERATION}
          experienceKeywordDataList={D.COOPERATION_KEYWORDS_LIST}
        />

        <Experience
          startDate="2022.03.28"
          endDate="2022.06.17"
          going="진행중"
          period="3개월"
          title="Wecode"
          subTitle="Wecode 부트캠프 Front-End 과정 32기"
          Boolean={true}
          experienceDataList={D.WECODE_EXPERIENCE_LIST}
          experienceKeywordDataList={D.WECODE_KEYWORDS_LIST}
        />

        <Experience
          startDate="2020.04.28"
          endDate="2020.10.20"
          going="수료"
          period="6개월"
          title="쌍용 교육센터"
          subTitle="6개월 국비지원 Java Full Stack 과정"
          Boolean={false}
          experienceDataList={D.SSANGYONG_EXPERIENCE}
          experienceKeywordDataList={D.SSANGYONG_KEYWORDS_LIST}
        />
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
  top: 0;
  width: 149px;
  height: 149px;
  background-image: url("https://camo.githubusercontent.com/25f9d37196ab6f1073589ea5ffc871515d2e56e35ecd546514a0c8d6ac293d76/687474703a2f2f692e696d6775722e636f6d2f6833757477494b2e706e67");
`;
