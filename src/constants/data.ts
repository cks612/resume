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
      "빅데이터/AI 기반 브랜드 애그리게이터 스타트업 (8명, 개발팀 5명)",
  },
  {
    id: 2,
    description: "AiWMS 창고 관리 App 개발 및 운영",
    detail: [
      {
        id: 1,
        description:
          "Flutter 기반 모바일 클라이언트 개발을 위한 스캐폴딩 적용 및 재사용 가능한 위젯 설계",
      },
      {
        id: 2,
        description: "Dio Interceptor 적용으로 토큰 갱신 자동화          ",
      },
      {
        id: 3,
        description: "Flutter Secure Storage 추가로 자동 로그인 구현",
      },
      {
        id: 4,
        description:
          "Provider 및 MultiProvider로 불필요한 위젯 re-build 성능이슈 및 디버깅 향상",
      },
      {
        id: 5,
        description:
          "바코드 스캐너 활용으로 제품 및 박스를 효율적으로 스캔 및 관리 기능 구현",
      },
      {
        id: 6,
        description: "구글 플레이 스토어 배포 및 버전관리",
      },
    ],
  },
  {
    id: 3,
    description: "AiLEE (브랜드 가치평가 및 동반 성장 시스템) 개발 및 운영",
    detail: [
      {
        id: 1,
        description: "MUI 기반 빅데이터 데이터 그리드 및 다양한 분석 차트 적용",
      },
      {
        id: 2,
        description:
          "회원가입 시 이메일을 통해 승인 여부를 확인하는 시스템 구축",
      },
      {
        id: 3,
        description:
          "사용자 권한 관리 시스템으로 관리자, 팀 리더, 일반 사용자 등 다양한 역할에 대한 권한을 부여 시스템 개발",
      },
      {
        id: 4,
        description:
          "직관적이고 사용자 친화적인 인터페이스를 설계하여, 사용자가 쉽게 시스템을 활용할 수 있도록 사용자 경험 향상          ",
      },
      {
        id: 5,
        description:
          "WMS(Warehouse Management System) 시스템 구축으로 발주부터 창고 내부 업무까지 효율적으로 관리할 수 있도록 기여",
      },
    ],
  },
  {
    id: 4,
    description: "퍼피럽 홈페이지 (자사 브랜드) 개발 및 운영",
    detail: [
      {
        id: 1,
        description: "Strapi Headless CMS 구축          ",
      },
      {
        id: 2,
        description: "네이버 NCP 및 CMS 활용 문자 인증 시스템 구축",
      },
      {
        id: 3,
        description:
          "AI 개발자와 협업을 통한 ChatGPT 기반 챗봇 구축으로 불필요한 CS 최소화",
      },
      {
        id: 4,
        description:
          "퍼피서더 구축으로 약 1000만원 참여금액 및 100만원 기부수익 발생",
      },
      {
        id: 5,
        description:
          "Lighthouse를 활용하여 분석 및 최적화를 통해 성능 25% 개선 및 SEO 91점으로 향상          ",
      },
      {
        id: 6,
        description: "관리자 페이지 개발로 업무환경 개선",
      },
    ],
  },
  {
    id: 5,
    description: "쇼퍼하우스 홈페이지 리뉴얼 개발 및 운영",
    detail: [
      {
        id: 1,
        description: "Strapi Headless CMS 구축 및 리뉴얼 개발          ",
      },
      {
        id: 2,
        description: "Lazy Loading 도입으로 LCP 30% (2.4초 -> 1.7초) 개선",
      },
      {
        id: 3,
        description:
          "Lighthouse를 활용하여 분석 및 최적화를 통해 성능 35%(74점 -> 99점) 개선 및 SEO 100점으로 향상",
      },
      {
        id: 4,
        description:
          "IntersectionObserver 커스텀 훅 및 반응형 클라이언트 개발로 사용자 경험 향상",
      },
      {
        id: 5,
        description: "Github Actions 활용으로 CI/CD 구축",
      },
    ],
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
