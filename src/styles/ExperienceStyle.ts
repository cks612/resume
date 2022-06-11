import styled from "styled-components";
import * as S from "./CommonCssStyles";
// import { Props } from "../types/commonTypes";

export const ExperienceContainer = styled.div`
  margin-top: 3rem !important;
`;

export const ExperienceSubject = styled.div`
  ${S.display}
  ${S.margin}
`;
export const ExperienceContainerHeaderName = styled.div`
  ${S.padding}

  h2 {
    font-size: 2rem;

    span {
      color: ${({ theme }) => theme.mainColor};
    }
  }
`;
export const ExperienceLeftSideArea = styled.div`
  ${S.commonLeftSideArea}
  ${S.padding}
  text-align: right;

  h4 {
    ${S.commonH4Style}
  }

  span {
    ${S.commonSpanStyle}

    &:nth-child(2) {
      margin-right: 0.25rem;
      color: ${({ theme }) => theme.whiteColor};
      background-color: ${({ theme }) => theme.mainColor};
    }
    &:nth-last-child(1) {
      color: ${({ theme }) => theme.whiteColor};
      background-color: ${({ theme }) => theme.badgeColor};
    }
  }
`;

export const ExperienceRightSideArea = styled.div`
  ${S.commonRightSideArea}
  ${S.padding}

  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  i {
    color: ${({ theme }) => theme.grayColor};
    font-style: italic;
  }

  ul {
    ${S.ulDisplay}
    display: flex;
    margin-bottom: 1rem;
    padding-top: 1rem;
    justify-items: start;
    flex-direction: column;
    width: 100%;
    list-style: inside;

    li {
      font-size: 1rem;
    }
  }
  strong {
    font-weight: 900;
  }

  span {
    ${S.commonSpanStyle}
    margin-right: 0.25rem;
    color: ${({ theme }) => theme.whiteColor};
    background-color: ${({ theme }) => theme.grayColor};
  }
`;