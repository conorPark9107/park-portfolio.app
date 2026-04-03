import { JavaOutlined } from '@ant-design/icons';

export const skills = {
  backEnd: [
    {
      id: 1,
      name: 'Java',
      desc: 'Stream, Lambda, 컬렉션 활용',
      icon: <JavaOutlined />,
    },
    {
      id: 2,
      name: 'Spring Boot',
      desc: 'REST API, JPA(CRUD), Transaction, WebClient',
    },
    {
      id: 3,
      name: 'MySQL',
      desc: 'CRUD, Join Query작성, Index',
    },
  ],
  frontEnd: [
    {
      id: 1,
      name: 'HTML/CSS',
      desc: '시맨틱 마크업, Flex/Grid 레이아웃',
    },
    {
      id: 2,
      name: 'JavaScript / TypeScript',
      desc: 'ES6+, DOM 조작, 이벤트 처리',
    },
    {
      id: 3,
      name: 'React',
      desc: '컴포넌트 기반 UI, Hooks, Recoil, Redux, Axios',
    },
    {
      id: 4,
      name: 'Ajax',
      desc: '비동기 요청 처리, 서버 데이터 동적 렌더링',
    },
  ],
};

export const { backEnd, frontEnd } = skills;
