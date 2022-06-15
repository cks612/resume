import * as S from "../../styles/_SkillsStyle";
import * as D from "../../constants/data";
import SkillsPart from "../../components/Skills/skillsComponent";

const SkillsPartIndex = () => {
  return (
    <>
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
    </>
  );
};

export default SkillsPartIndex;
