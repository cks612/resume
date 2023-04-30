import { SkillsDataProps, ExperienceProps } from "../types/commonTypes";

// Skills CONSTANT Data
export const FRONT_END_SKILLS: SkillsDataProps[] = [
  { id: 1, name: "HTML", rating: 3 },
  { id: 2, name: "CSS", rating: 3 },
  { id: 3, name: "Styled-Components", rating: 3 },
  { id: 4, name: "JavaScript", rating: 3 },
  { id: 5, name: "React.js", rating: 3 },
  { id: 6, name: "SASS", rating: 3 },
  { id: 7, name: "TypeScript", rating: 2 },
  { id: 8, name: "Zustand", rating: 2 },
  { id: 9, name: "Next.js", rating: 3 },
];

export const BACK_END_SKILLS: SkillsDataProps[] = [
  { id: 1, name: "Java", rating: 2 },
  { id: 2, name: "Spring", rating: 1 },
  { id: 3, name: "Spring Boot", rating: 1 },
  { id: 4, name: "Spring MVC", rating: 1 },
];

export const DEVOPS_SKILLS: SkillsDataProps[] = [
  { id: 1, name: "AWS-EC2", rating: 2 },
  { id: 2, name: "MySql", rating: 1 },
];

export const COLLABORATION_TOOLS: SkillsDataProps[] = [
  { id: 1, name: "Git / Github", rating: 3 },
  { id: 2, name: "Trello", rating: 3 },
  { id: 3, name: "Notion", rating: 3 },
  { id: 4, name: "Vs Code", rating: 3 },
  { id: 5, name: "Slack", rating: 3 },
  { id: 6, name: "Figma", rating: 2 },
  { id: 7, name: "Asana", rating: 1 },
];

// Shopperhouse
export const SHOPPERHOUSE_LIST = [
  {
    id: 1,
    description:
      "빅데이터/AI 기반 브랜드 애그리게이터 스타트업 (6명, 개발팀 3명)",
  },
  {
    id: 2,
    description: "자사 홈페이지 리뉴얼 프론트엔드 개발",
  },
  {
    id: 3,
    description: "인수 브랜드 홈페이지 프론트엔드 개발",
  },
  {
    id: 4,
    description:
      "브랜드 가치평가 및 동반 성장 시스템 AiLEE 유지보수 및 대시보드 개발",
  },
  {
    id: 5,
    description: "ChatGPT 기반 인수 브랜드 홈페이지 챗봇 프론트엔드 개발",
  },
];

export const SHOPPERHOSE_KEYWORDS: ExperienceProps[] = [
  { id: 1, keywords: "React" },
  { id: 2, keywords: "NextJS" },
  { id: 3, keywords: "TypeScript" },
  { id: 4, keywords: "Styled-Components" },
  { id: 5, keywords: "Axios" },
  { id: 6, keywords: "Redux" },
  { id: 7, keywords: "AWS" },
  { id: 8, keywords: "ChatGPT" },
];
// Experience 기업협업 Data
export const CORPORATE_COOPERATION = [
  {
    id: 1,
    description:
      "기존 Recoil로 불필요하게 전역관리 하던 사이트를 React-Query로 전환",
  },
  {
    id: 2,
    description: "React-Query 사용 방법과 useQuery 및 useMutation 적용",
  },
  {
    id: 3,
    description: "React Debounce와 React-Query를 통해 검색기능 통신 적용",
  },
  {
    id: 4,
    description: "스켈레톤 UI로 로딩시 더욱 자연스러운 로딩화면 구현",
  },
  {
    id: 5,
    description: "AntD 및 lodash 라이브러리 admin 페이지에 적용",
  },
];

export const COOPERATION_KEYWORDS_LIST: ExperienceProps[] = [
  { id: 1, keywords: "Recoil" },
  { id: 2, keywords: "React-Query" },
  { id: 3, keywords: "React Debounce" },
  { id: 4, keywords: "useQuery" },
  { id: 5, keywords: "useMutation" },
  { id: 6, keywords: "Skelleton-UI" },
];

// Experience Wecode Data
export const WECODE_EXPERIENCE_LIST: ExperienceProps[] = [
  {
    id: 1,
    description: "현대 웹 개발에 가장 많이 사용하는 React 라이브러리 학습",
  },
  {
    id: 2,
    description: "HTTP 네트워크 통신을 통한 데이터 요청 및 처리 방법 학습",
  },
  {
    id: 3,
    description:
      "클론 프로젝트를 통해 Web 서비스에 대한 이해와 실전 문제 해결 역량 증진",
  },
  {
    id: 4,
    description: "로그인/회원가입 기능 구현을 통한 인증/인가 프로세스 학습",
  },
  {
    id: 5,
    description: "웹 페이지 구조를 정의하는 HTML과 스타일을 부여하는 CSS 학습",
  },
  {
    id: 6,
    description: "대표적인 클라우드 서비스 AWS 를 활용한 프로젝트 결과물 배포",
  },
  {
    id: 7,
    description:
      "2-6명이 한 팀으로 구성되며 협업 기업으로 출근하여 프로젝트에 참여",
  },
];

export const WECODE_KEYWORDS_LIST: ExperienceProps[] = [
  { id: 1, keywords: "HTML" },
  { id: 2, keywords: "CSS" },
  { id: 3, keywords: "JavaScript" },
  { id: 4, keywords: "React" },
  { id: 5, keywords: "SASS" },
  { id: 6, keywords: "Styled-Components" },
];

// Experience 쌍용교육센터 Data
export const SSANGYONG_EXPERIENCE: ExperienceProps[] = [
  {
    id: 1,
    description: "Java 언어 기반의 스마트 웹 Full-Stack 개발자 양성 과정",
  },
  {
    id: 2,
    description: "Open JDK 자바 코딩 & 산출물 배포",
  },
  {
    id: 3,
    description: "Oracle DBMS",
  },
  {
    id: 4,
    description: "스마트 웹 제작을 위한 요구사항 분석 및 화면구현",
  },
  {
    id: 5,
    description: "Front End 반응형, 싱글 페이지를 위한 UI/UX 설계와 구현",
  },
  {
    id: 6,
    description: "Framework & BackEnd 개발 및 테스트 수행",
  },
];

export const SSANGYONG_KEYWORDS_LIST: ExperienceProps[] = [
  { id: 1, keywords: "Java" },
  { id: 2, keywords: "Spring" },
  { id: 3, keywords: "Spring Boot" },
  { id: 4, keywords: "Spring MVC" },
  { id: 5, keywords: "MySql" },
  { id: 6, keywords: "Oracle" },
];
