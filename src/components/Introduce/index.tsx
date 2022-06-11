import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import * as S from "../../styles/InfoIntroduceStyle";

export const Introduce = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <S.CommonContainer>
      <S.CommonSubject>
        <S.LeftSideArea>
          <S.CommonFontStyle>INTRODUCE</S.CommonFontStyle>
        </S.LeftSideArea>
        <S.RightSideArea>
          <p>
            웹 개발에 필요한 JavaScript를 기본으로 React.js와 같은 트렌드의
            프레임워크를 중점적으로 학습하며 Styled-Components, AWS, GIT 등을
            같이 사용하며 프로젝트를 설계부터 개발, 그리고 배포까지 한 경험이
            있습니다. 그냥 쉬운 코드를 짜는 Coder가 아닌 가독성 좋은
            Programmer가 되기 위해 언제나 고민하고 많은 노력을 합니다.
          </p>
          <p>
            OpenAPI와 공공데이터 활용에 관심이 많고, 다양한 방법으로 프로젝트에
            개발할려고 노력하고 있습니다. 한 번 작업에 집중하기 시작하면 끝을
            내고 싶어하는 성향이 있으며 성장할 수 있는 일을 찾을려고 다양한
            기술을 주도적으로 학습하거나 팀을 꾸려 프로젝트를 직접 기획해
            도전하고 있습니다
          </p>
          <p>
            개발자란 결국 회사에 필요한 서비스 개발과 다양한 커뮤니케이션 즉,
            비즈니스적인 협업 능력이 가장 중요하다고 생각하고 있습니다. 최적의
            해결 방안으로 접근하며 개인적인 부분보다는 회사와 팀 특히,
            동료들에게 도움이 되는 같이 일 하고 싶은 개발자로 성장하기 위해 더
            치열하게 학습하고, 경험하고, 노력하고 있습니다.
          </p>
          <S.LatestUpdated BackColor={themeContext["grayColor"]}>
            <strong>Last Updated On</strong>
            <span>2022 . 06. 08</span>
          </S.LatestUpdated>
          <S.SignatureName>kyusung</S.SignatureName>
        </S.RightSideArea>
      </S.CommonSubject>
    </S.CommonContainer>
  );
};
