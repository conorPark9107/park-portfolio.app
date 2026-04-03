import styled from 'styled-components';
import projects from '../../data/projects';
import { Tag } from 'antd';

function Projects() {
  return (
    <ProjectsWrapper>
      <Bg></Bg>
      <MainTitle className="text-3xl font-bold mb-4 pl-3 pb-2 pt-2">프로젝트</MainTitle>
      <ProjectWrapper>
        {projects.map((project, index) => (
          <Project key={index}>
            {/* 프로젝트 이름 */}
            <TiTle className="font-semibold text-lg">
              <h2>
                {project.id}. {project.title}
              </h2>
            </TiTle>
            {/* 프로젝트 설명 */}
            <Desc className="text-sm text-gray-500">· {project.desc}</Desc>

            <CateWrapper>
              <SubTitle>사용된 기술</SubTitle>
              <Desc className="text-sm text-gray-500">
                <TagWrapper>
                  <Label>· backend :</Label>
                  {project.usedSkill.backend.map((data, index) => (
                    <Tag className="ml-1" key={`${data}-${index}`} color="#020320">
                      {data}
                    </Tag>
                  ))}
                </TagWrapper>
                <TagWrapper>
                  <Label>· frontend :</Label>
                  {project.usedSkill.frontend.map((data, index) => (
                    <Tag className="ml-1" key={`${data}-${index}`} color="#020320">
                      {data}
                    </Tag>
                  ))}
                </TagWrapper>
                <TagWrapper>
                  <Label>· infra :</Label>
                  {project.usedSkill.infra.map((data, index) => (
                    <Tag className="ml-1" key={`${data}-${index}`} color="#020320">
                      {data}
                    </Tag>
                  ))}
                </TagWrapper>
                <TagWrapper>
                  <Label>· etc :</Label>
                  {project.usedSkill.etc.map((data, index) => (
                    <Tag className="ml-1" key={`${data}-${index}`} color="#020320">
                      {data}
                    </Tag>
                  ))}
                </TagWrapper>
              </Desc>
            </CateWrapper>
            <CateWrapper>
              <SubTitle>프로젝트 설명</SubTitle>
              {/* 프로젝트 설명 */}
              {project.descDetail.map((detail, index) => (
                <Desc key={index} className="text-sm text-gray-500">
                  · {detail}
                </Desc>
              ))}
            </CateWrapper>

            {project.githubLink && (
              <CateWrapper>
                <SubTitle>Github - README</SubTitle>
                {/* 깃허브 링크 */}
                <ProjectLinkText
                  className="text-gray-500"
                  href={project.githubLink}
                  target="_blank"
                >
                  🔗 {project.githubLink}
                </ProjectLinkText>
              </CateWrapper>
            )}
            {project.liveLink && (
              <CateWrapper>
                <SubTitle>사이트 방문</SubTitle>
                <ProjectLinkText className="text-gray-500" href={project.liveLink} target="_blank">
                  🔗 {project.liveLink}
                </ProjectLinkText>
              </CateWrapper>
            )}
          </Project>
        ))}
      </ProjectWrapper>
    </ProjectsWrapper>
  );
}
const ProjectsWrapper = styled.div``;
const Bg = styled.div``;
const Label = styled.span`
  font-weight: bold;
`;
const TagWrapper = styled.div`
  margin-bottom: 2px;
`;

const MainTitle = styled.div``;

const Project = styled.div`
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  padding: 1.5rem;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.11);
  }
`;
const SubTitle = styled.p`
  color: black;
  font-weight: 600;
  font-size: 1rem;
  padding-bottom: 5px;
`;
const CateWrapper = styled.div`
  line-height: 1.13;
  margin-top: 20px;
`;
const Desc = styled.div`
  font-size: 0.9rem;
`;
const TiTle = styled.div``;
const ProjectLinkText = styled.a`
  font-size: 0.8rem;
  &:hover {
    color: #020096;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Projects;
