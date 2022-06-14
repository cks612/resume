import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { SkillsDataProps } from "../../types/commonTypes";
import * as S from "../../styles/SkillsStyle";
import { Line } from "../../styles/CommonStyle";

const SkillsPart = ({
  LISTDATA,
  title,
  Boolean,
}: {
  LISTDATA: SkillsDataProps[];
  title: string;
  Boolean: boolean;
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <S.SkillsSubject>
        <S.SkillsLeftSideArea>
          <h4>{title}</h4>
        </S.SkillsLeftSideArea>
        <S.SkillsRightSideArea>
          <S.SkillsRightSideAreaContainer>
            <S.SkillsList>
              <ul>
                {LISTDATA?.map((data) => {
                  return (
                    <li key={data.id}>
                      <S.SkillsName
                        BackColor={
                          data.rating === 3
                            ? themeContext["pointColor"]
                            : data.rating === 2
                            ? themeContext["grayColor"]
                            : themeContext["fontColor"]
                        }
                      >
                        {data.rating}
                      </S.SkillsName>
                      {data.name}
                    </li>
                  );
                })}
              </ul>
            </S.SkillsList>
          </S.SkillsRightSideAreaContainer>
        </S.SkillsRightSideArea>
      </S.SkillsSubject>
      {Boolean && <Line />}
    </>
  );
};

export default SkillsPart;
