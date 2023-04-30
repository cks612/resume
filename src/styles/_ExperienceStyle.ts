import styled, { css } from "styled-components";
import * as S from "./_CommonCssStyles";
import { devices } from "./_MediaQueryStyles";
// import { Props } from "../types/commonTypes";

interface Props {
  going?: string;
}
export const ExperienceContainer = styled.div`
  margin-top: 3rem !important;

  @media ${devices.mobileL} {
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export const ExperienceSubject = styled.div`
  ${S.display}
  ${S.margin}

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;
export const ExperienceContainerHeaderName = styled.div`
  ${S.padding}

  h2 {
    font-size: 2rem;

    span {
      color: ${({ theme }) => theme.mainColor};
      font-weight: 900;
    }
  }
`;
export const ExperienceLeftSideArea = styled.div<Props>`
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
      ${(props) => {
        if (props.going === "재직 중")
          return css`
            background: ${({ theme }) => theme.mainColor};
          `;
        else {
          return css`
            background: ${({ theme }) => theme.pointColor};
          `;
        }
      }}
    }
    &:nth-last-child(1) {
      color: ${({ theme }) => theme.whiteColor};
      background-color: ${({ theme }) => theme.badgeColor};
    }
  }

  @media ${devices.mobileL} {
    max-width: 100%;
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
