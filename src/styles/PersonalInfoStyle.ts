import styled from "styled-components";
import * as S from "./CommonCssStyles";
import { Props } from "../types/commonTypes";
import { devices } from "./MediaQueryStyles";

export const CommonContainer = styled.div`
  margin-top: 3rem !important;

  @media ${devices.mobileL} {
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export const CommonSubject = styled.div`
  ${S.display}
  ${S.margin}

  @media ${devices.mobileL} {
    flex-direction: row;
    height: 100%;
  }
`;

// Introduce Part
export const LeftSideArea = styled.div`
  ${S.padding}
  ${S.commonLeftSideArea}

  @media ${devices.mobileL} {
    flex: 0 0 100%;
    max-width: 100%;
    height: 59%;
    margin: 0 auto;
  }
`;

export const ProfileImgContainer = styled.div`
  height: 100%;
  padding-bottom: 1rem !important;
`;

export const ProfileImg = styled.div`
  ${S.commonBorderBackSize}
  height: 100%;
  width: 100%;
  background-image: url("https://user-images.githubusercontent.com/66737450/173180777-63b4f6f9-1e42-47a8-af9d-f24b51eed1e1.png");

  @media ${devices.mobileL} {
    background-size: contain;
  }
`;

export const RightSideArea = styled.div`
  ${S.padding}
  ${S.commonRightSideArea}

p {
    ${S.commonPTag}
  }

  @media ${devices.mobileL} {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const RightSideContents = styled.div`
  ${S.display}
`;

export const MyName = styled.div`
  ${S.padding}
  max-width: 100%;
  text-align: left !important;
  flex-basis: 0;
  flex-grow: 1;
`;

export const CommonFontStyle = styled.h1`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.mainColor};
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.2;

  @media ${devices.mobileL} {
    font-size: 2rem;
  }
`;

export const Contact = styled.div`
  flex-grow: 1;
  padding: 1rem 0 15px 15px;
`;

export const ContactRow = styled.div`
  padding-bottom: 0.5rem !important;

  a,
  span {
    padding-left: 10px;
    color: ${({ theme }) => theme.aTagColor};
    text-decoration: none;

    &:hover {
      color: #424242;
    }
  }
`;
export const SimpleIntroduce = styled.div`
  position: relative;
  margin-top: 1rem !important;
  margin-bottom: 1rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  border-color: #d6d8db;
  background-color: #e2e3e5;
  color: #383d41;
  flex-grow: 1;

  i {
    padding-right: 0.5rem;
  }
`;
