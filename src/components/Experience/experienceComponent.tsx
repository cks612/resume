import React from "react";
import { Line } from "../../styles/_CommonStyle";
import { ExperienceProps } from "../../types/commonTypes";

import * as S from "../../styles/_ExperienceStyle";

export const Experience = ({
  startDate,
  endDate,
  going,
  period,
  title,
  subTitle,
  isLineNeeded,
  experienceDataList,
  experienceKeywordDataList,
}: {
  startDate: string;
  endDate: string;
  going: string;
  period: string;
  title: string;
  subTitle: string;
  isLineNeeded: boolean;
  experienceDataList: ExperienceProps[];
  experienceKeywordDataList: ExperienceProps[];
}) => {
  return (
    <>
      <S.ExperienceSubject>
        <S.ExperienceLeftSideArea>
          <h4>
            {startDate} ~ {endDate}
          </h4>
          <span>{going}</span>
          <span>{period}</span>
        </S.ExperienceLeftSideArea>
        <S.ExperienceRightSideArea>
          <h4>{title}</h4>
          <i>{subTitle}</i>
          <ul>
            {experienceDataList?.map((data) => {
              return <li key={data.id}>{data.description}</li>;
            })}
          </ul>
          <strong>KeyWords</strong>
          <div>
            {experienceKeywordDataList?.map((data) => {
              return <span key={data.id}>{data.keywords}</span>;
            })}
          </div>
        </S.ExperienceRightSideArea>
      </S.ExperienceSubject>
      {isLineNeeded && <Line />}
    </>
  );
};
