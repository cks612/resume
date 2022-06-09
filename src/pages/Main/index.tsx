import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import SkillsPart from "../../components/Nav/Skills";
import * as C from "../../styles/CommonCssStyles";
import * as S from "../../styles/SkillsStyle";
import { FRONT_END_SKILLS } from "../../constants/data";
import { Props } from "../../types/commonTypes";

const Main = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <MainWrapper>
        <a href="https://github.com/cks612" target="_blank" rel="noreferrer">
          <MainHeaderImg />
        </a>
        <CommonContainer>
          <CommonSubject>
            <LeftSideArea>
              <ProfileImgContainer>
                <ProfileImg />
              </ProfileImgContainer>
            </LeftSideArea>

            <RightSideArea>
              <RightSideContents>
                <MyName>
                  <CommonFontStyle>최규성 (voyage-dev)</CommonFontStyle>
                </MyName>
              </RightSideContents>
              <RightSideContents>
                <Contact>
                  <ContactRow>
                    <i className="fa fa-duotone fa-envelope " />
                    <a href="mailto:kyusung612@gmail.com">
                      kyusung612@gmail.com
                    </a>
                  </ContactRow>
                  <ContactRow>
                    <i className="fa fa-duotone fa-phone" />
                    <span>010-9599-**** (Contact if you want my #)</span>
                  </ContactRow>
                  <ContactRow>
                    <i className="fa fa-brands fa-github" />
                    <a
                      href="https://github.com/cks612"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://github.com/cks612
                    </a>
                  </ContactRow>
                  <ContactRow>
                    <i className="fa fa-solid fa-blog " />
                    <a
                      href="https://voyage-dev.tistory.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://voyage-dev.tistory.com/
                    </a>
                  </ContactRow>
                </Contact>
              </RightSideContents>
              <RightSideContents>
                <SimpleIntroduce>
                  <i className="fa fa-solid fa-anchor" />
                  <span>
                    안녕하세요 코딩으로 항해하면서 성장하는 주니어
                    개발자입니다!~
                  </span>
                </SimpleIntroduce>
              </RightSideContents>
            </RightSideArea>
          </CommonSubject>
        </CommonContainer>

        {/* Introduce Part */}

        <CommonContainer>
          <CommonSubject>
            <LeftSideArea>
              <CommonFontStyle>INTRODUCE</CommonFontStyle>
            </LeftSideArea>
            <RightSideArea>
              <p>
                웹 개발에 필요한 JavaScript를 기본으로 React.js와 같은 트렌드의
                프레임워크를 중점적으로 학습하며 Styled-Components, AWS, GIT
                등을 같이 사용하며 프로젝트를 설계부터 개발, 그리고 배포까지 한
                경험이 있습니다. Easy Coder가 아닌 쉬운 코드를 짜는 Programmer가
                되기 위해 언제나 고민하고 많은 노력을 합니다.
              </p>
              <p>
                OpenAPI와 공공데이터 활용에 관심이 많고, 다양한 방법으로
                프로젝트에 개발할려고 노력하고 있습니다. 한 번 작업에 집중하기
                시작하면 끝을 내고 싶어하는 성향이 있으며 성장할 수 있는 일을
                찾을려고 다양한 기술을 주도적으로 학습하거나 팀을 꾸려
                프로젝트를 직접 기획해 도전하고 있습니다
              </p>
              <p>
                개발자란 결국 회사에 필요한 서비스 개발과 다양한 커뮤니케이션
                즉, 비즈니스적인 협업 능력이 가장 중요하다고 생각하고 있습니다.
                최적의 해결 방안으로 접근하며 개인적인 부분보다는 회사와 팀
                특히, 동료들에게 도움이 되는 같이 일 하고 싶은 개발자로 성장하기
                위해 더 치열하게 학습하고, 경험하고, 노력하고 있습니다.
              </p>
              <LatestUpdated BackColor={themeContext["grayColor"]}>
                <strong>Last Updated On</strong>
                <span>2022 . 06. 08</span>
              </LatestUpdated>
              <SignatureName>kyusung</SignatureName>
            </RightSideArea>
          </CommonSubject>
        </CommonContainer>

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
            // title="Front-End"
          ></SkillsPart>
        </S.SkillsContainer>
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

const CommonContainer = styled.div`
  margin-top: 3rem !important;
`;

const CommonSubject = styled.div`
  ${C.display}
  ${C.margin}
`;

// Introduce Part
const LeftSideArea = styled.div`
  ${C.padding}
  ${C.commonLeftSideArea}
`;

const ProfileImgContainer = styled.div`
  height: 100%;
  padding-bottom: 1rem !important;
`;

const ProfileImg = styled.div`
  ${C.commonBorderBackSize}
  height: 100%;
  width: 100%;
  background-image: url("/images/aboutME.png");
`;

const RightSideArea = styled.div`
  ${C.padding}
  ${C.commonRightSideArea}

  p {
    ${C.commonPTag}
  }
`;

const RightSideContents = styled.div`
  ${C.display}
`;

const MyName = styled.div`
  ${C.padding}
  max-width: 100%;
  text-align: left !important;
  flex-basis: 0;
  flex-grow: 1;
`;

const CommonFontStyle = styled.h1`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.mainColor};
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

const Contact = styled.div`
  flex-grow: 1;
  padding: 1rem 0 15px 15px;
`;

const ContactRow = styled.div`
  padding-bottom: 0.5rem !important;

  a,
  span {
    padding-left: 10px;
    color: ${({ theme }) => theme.aTagColor};
    text-decoration: none;

    &:hover {
      color: #424242;
    }
  }
`;
const SimpleIntroduce = styled.div`
  position: relative;
  margin-top: 1rem !important;
  margin-bottom: 1rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  border-color: #d6d8db;
  background-color: #e2e3e5;
  color: #383d41;
  flex-grow: 1;

  i {
    padding-right: 0.5rem;
  }
`;

const LatestUpdated = styled.p<Props>`
  ${C.commonPTag}
  text-align: right;

  strong {
    font-size: 80%;
  }

  span {
    padding: 0.25em 0.4em;
    margin-left: 10px;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.whiteColor};
    background-color: ${(props) => props.BackColor};
    font-size: 75%;
    font-weight: 700;
  }
`;

const SignatureName = styled.p`
  ${C.commonPTag}
  text-align: right;
  font-family: cursive;
  font-size: 1.5em;
`;
