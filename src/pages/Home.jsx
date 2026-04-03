import { styled } from 'styled-components';
import Skills from './Skills';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <section>
      <Wrapper>
        <Profile>
          <Image className="object-cover scale-90" src="/me.jpg" />
          <MainText>
            안녕하세요. 저는 박종복입니다. <br />
            저는 새로운 것을 배우고, 직접 구현해보는 것을 즐기는 개발자입니다.
          </MainText>
        </Profile>

        <DescWrapper>
          <Desc className="text-gray-600">먼저 방문해주셔서 감사합니다.</Desc>
          <Desc className="text-gray-600">저는 코드의 동작 원리를 이해하며 작성하는 것과</Desc>
          <Desc className="text-gray-600">
            일관된 스타일로 가독성 높은 코드를 만드는 것을 중요하게 생각합니다.
          </Desc>
        </DescWrapper>
      </Wrapper>
      <Wrapper>
        <div className="pb-5">
          <SubText>아래에서 저의 개발 활동을 확인하실 수 있습니다.</SubText>
          <div className="flex flex-col items-left gap-1">
            <LinkText
              className="text-gray-500"
              href="https://github.com/conorPark9107"
              target="_blank"
            >
              🔗 깃허브 (https://github.com/conorPark9107)
            </LinkText>
            <LinkText
              className="text-gray-500"
              href="https://www.acmicpc.net/user/spuups"
              target="_blank"
            >
              🔗 알고리즘 (https://www.acmicpc.net/user/spuups)
            </LinkText>
          </div>
        </div>

        <div className="pb-5">
          <SubText>사이드 프로젝트</SubText>
          <div className="flex flex-col items-left gap-1">
            <LinkText className="text-gray-500" href="https://albiongg.com/" target="_blank">
              🔗 https://albiongg.com/
            </LinkText>
            <LinkText
              onClick={() => {
                navigate('/project');
              }}
            >
              🔗 프로젝트 상세 보러가기
            </LinkText>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <Skills />
      </Wrapper>
    </section>
  );
}
const LinkText = styled.a`
  cursor: pointer;
  font-size: 0.8rem;
  &:hover {
    color: #0300c5;
  }
`;
const Profile = styled.div`
  display: flex;
  gap: 12px;
`;
const Image = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
const MainText = styled.h2`
  letter-spacing: -0.025em;
  font-weight: 700;
  font-size: 1.5rem;
`;
const DescWrapper = styled.div`
  margin-top: 0.5rem;
`;
const Desc = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: left;
`;
const SubText = styled.p`
  line-height: 1.25rem;
  text-align: left;
  font-weight: bold;
`;
const Wrapper = styled.div`
  max-width: 100%;
  background: #fff;
  padding: 30px;
  margin: 10px 0;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
`;
export default Home;
