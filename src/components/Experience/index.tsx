import React from "react";
import * as S from "../../styles/_ExperienceStyle";
import * as D from "../../constants/data";
import { Experience } from "./experienceComponent";

export const ExperiencePartIndex = () => {
  return (
    <S.ExperienceContainer>
      <S.ExperienceSubject>
        <S.ExperienceContainerHeaderName>
          <h2>
            <span>EXPERIENCE</span>
          </h2>
        </S.ExperienceContainerHeaderName>
      </S.ExperienceSubject>

      <Experience
        startDate="2022.05.16"
        endDate="2022.06.16"
        going="협업끝"
        period="1개월"
        title="머치스퀘어"
        subTitle="1달간 기업협업 인턴으로 참여하여 실무 개발 프로젝트를 진행 "
        isLineNeeded={true}
        experienceDataList={D.CORPORATE_COOPERATION}
        experienceKeywordDataList={D.COOPERATION_KEYWORDS_LIST}
      />

      <Experience
        startDate="2022.03.28"
        endDate="2022.06.17"
        going="수료"
        period="3개월"
        title="Wecode"
        subTitle="Wecode 부트캠프 Front-End 과정 32기"
        isLineNeeded={true}
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
        isLineNeeded={false}
        experienceDataList={D.SSANGYONG_EXPERIENCE}
        experienceKeywordDataList={D.SSANGYONG_KEYWORDS_LIST}
      />
    </S.ExperienceContainer>
  );
};
