import { css } from "styled-components";
// common CSS
export const display = css`
  display: flex;
  flex-wrap: wrap;
`;

export const commonDisplay = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ulDisplay = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const margin = css`
  margin-left: -15px;
  margin-right: -15px;
`;
export const padding = css`
  padding-left: 15px;
  padding-right: 15px;
`;

export const commonBorderBackSize = css`
  background-size: cover;
  border-style: none;
`;

export const commonPTag = css`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const commonLeftSideArea = css`
  flex: 0 0 25%;
  max-width: 25%;
`;
export const commonRightSideArea = css`
  flex: 0 0 75%;
  max-width: 75%;
`;

export const skillsArea = css`
  flex: 0 0 100%;
`;

export const commonH4Style = css`
  color: ${({ theme }) => theme.fontColor};
  font-size: 1.5rem;
`;
