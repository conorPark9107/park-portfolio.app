const projects = [
  {
    id: 1,
    title: 'AlbionGG.com',
    desc: 'Albion Online 데이터를 가공하여 유저 의사결정을 돕는 웹 서비스입니다.',
    descDetail: [
      '애정을 가지고 개발하고 배포하며 1년째 운영을 경험하고 있는 프로젝트입니다.',
      'WebClient를 활용하여 Albion Online의 API로부터 데이터를 제공받아 파싱하여 저장 및 사용자에게 전달하였습니다.',
      '같은 URL에 대해서는 반복요청되지 않도록 URL을 기준으로 캐싱처리를 하였습니다.',
    ],
    usedSkill: {
      backend: ['Spring Boot', 'JPA', 'MySQL'],
      frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
      infra: ['AWS', 'Docker'],
      etc: ['WebClient', 'Security', 'git'],
    },
    liveLink: 'https:Albiongg.com',
    githubLink: 'https://github.com/conorPark9107/develop-helper',
  },
  {
    id: 2,
    title: '호텔 키오스크 체크인 부분 개발',
    desc: '호텔 예약이 완료된 고객들로부터 키오스크를 통해 체크인 처리해주는 벡엔드 단을 개발하였습니다.',
    descDetail: [
      `Spring의 RestTemplate을 활용하여 호텔 시스템과 연동되는 API를 구현하고, 응답데이터를 활용하여 체크인 프로세스에 활용하였습니다.`,
    ],
    usedSkill: {
      backend: ['Spring framework', 'Mybatis', 'MySQL'],
      frontend: ['HTML', 'CSS', 'JavaScript', 'Jquery'],
      infra: ['AWS'],
      etc: ['RestTemplate', 'Selenium', 'SVN'],
    },
  },
  {
    id: 3,
    title: '호텔 예약 시스템 크롤링',
    desc: '온라인 여행사(부킹닷컴, 아고다, 호텔스닷컴 등)로부터 데이터 수집를 수집하고, 호텔의 예약 서비스에 등록해주는 서비스입니다.',
    descDetail: [
      '새로운 온라인 여행사 페이지가 있으면 Selenium라이브러리를 활용하여 크롤링 코드를 작성하여 예약 데이터를 DB에 저장하는 코드 작성하였습니다.',
      '수집된 데이터를 DB에서 꺼내 호텔 예약 서비스에 다시 크롤링으로 등록해주는 코드를 작성하였습니다.',
    ],
    usedSkill: {
      backend: ['Spring framework', 'Mybatis', 'MySQL'],
      frontend: ['HTML', 'CSS', 'JavaScript', 'Jquery'],
      infra: ['AWS'],
      etc: ['Selenium', 'SVN'],
    },
  },
];

export default projects;
