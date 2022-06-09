import styled from "styled-components";
import * as S from "./CommonCssStyles";

interface Props {
  BackColor: string;
}

// Skills Part
export const SkillsContainer = styled.div`
  margin-top: 3rem !important;
`;

export const SkillsSubject = styled.div`
  ${S.display}
  ${S.margin}
`;

export const SkillsContainerHeader = styled.div`
  margin-bottom: 1rem;
`;

export const SkillsContainerHeaderName = styled.div`
  ${S.padding}

  h2 {
    font-size: 2rem;

    span {
      color: ${({ theme }) => theme.mainColor};
    }

    small {
      position: relative;
      font-size: 80%;
      font-weight: 400;
      vertical-align: 1rem;

      div {
        position: absolute; /*어떤 요소에 absolute를 주면 블럭요소는 inline으로 변경됨.*/
        background-color: #000;
        width: 200px;
        color: ${({ theme }) => theme.whiteColor};
        top: -2.5rem;
        left: 9rem;
        padding: 10px;
        border-radius: 5px;
        text-align: left;
        font-size: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: 0.5s;
        visibility: hidden;

        &::after {
          border-top: 0px solid transparent;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #000;
          content: "";
          position: absolute;
          top: 50%;
          left: -7%;
          transform: rotate(270deg);
        }
      }
      &:hover div {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const SkillsLeftSideArea = styled.div`
  ${S.commonLeftSideArea}
  ${S.padding}
  text-align: right;

  h4 {
    ${S.commonH4Style}
  }
`;

export const SkillsRightSideArea = styled.div`
  ${S.commonRightSideArea}
  ${S.padding}
`;

export const SkillsRightSideAreaContainer = styled.div`
  ${S.display}
  ${S.margin}
  margin-top: 0;
`;

export const SkillsList = styled.div`
  ${S.display}
  ${S.padding}
  ${S.skillsArea}

  ul {
    display: grid;
    margin-top: 0;
    margin-bottom: 1rem;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-auto-flow: column;
    justify-items: start;
    flex-direction: column;

    li {
      ${S.commonDisplay}
      font-size: 1.2rem;
    }
  }
`;

export const SkillsName = styled.span<Props>`
  display: inline-block;
  padding: 0.25em 0.6em;
  margin-right: 1em;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.whiteColor};
  background-color: ${(props) => props.BackColor};
  font-size: 75%;
  font-weight: 700;
  text-align: center;
  line-height: 1;
  white-space: nowrap;
  vertical-align: baseline;
`;

export const Line = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
