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
  endDate?: string;
  going: string;
  period?: string;
  title: string;
  subTitle: string;
  isLineNeeded: boolean;
  experienceDataList: ExperienceProps[];
  experienceKeywordDataList: ExperienceProps[];
}) => {
  const today = new Date();
  const start = new Date(startDate);

  const differenceDate = () => {
    if (endDate !== undefined) {
      const end = new Date(endDate);
      const differenceYear = end.getFullYear() - start.getFullYear();
      const differenceMonth = end.getMonth() - start.getMonth();

      return differenceYear > 0
        ? differenceYear + "년 " + differenceMonth + "개월"
        : differenceMonth + "개월";
    } else {
      const differenceYear = today.getFullYear() - start.getFullYear();
      const differenceMonth = today.getMonth() + 1 - start.getMonth();
      return differenceYear > 0
        ? differenceYear + "년 " + differenceMonth + "개월"
        : differenceMonth + "개월";
    }
  };

  return (
    <>
      <S.ExperienceSubject>
        <S.ExperienceLeftSideArea going={going}>
          <h4>
            {startDate} ~ {endDate && endDate}
          </h4>
          <span>{going}</span>
          <span>{differenceDate()}</span>
        </S.ExperienceLeftSideArea>
        <S.ExperienceRightSideArea>
          <h4>{title}</h4>
          <i>{subTitle}</i>
          <ul>
            {experienceDataList?.map((data) => {
              return (
                <li key={data.id}>
                  {data.description}
                  {data.detail?.map((res) => {
                    return (
                      <ul key={res.id}>
                        <li>{res.description}</li>
                      </ul>
                    );
                  })}
                </li>
              );
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
