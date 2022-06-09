import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { List, Title } from "../../../types/commonTypes";

import * as S from "../../../styles/SkillsStyle";

const SkillsPart = (
  { LISTDATA }: { LISTDATA: List[] },
  { title }: { title: Title }
) => {
  console.log(title);
  const themeContext = useContext(ThemeContext);

  return (
    <S.SkillsSubject>
      <S.SkillsLeftSideArea>
        <h4>{title}</h4>
      </S.SkillsLeftSideArea>
      <S.SkillsRightSideArea>
        <S.SkillsRightSideAreaContainer>
          <S.SkillsList>
            <ul>
              {LISTDATA?.map((data: List) => {
                return (
                  <li key={data.id}>
                    <S.SkillsName
                      BackColor={
                        data.rating === 3
                          ? themeContext["mainColor"]
                          : data.rating === 2
                          ? themeContext["grayColor"]
                          : themeContext["whiteColor"]
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
  );
};

export default SkillsPart;
