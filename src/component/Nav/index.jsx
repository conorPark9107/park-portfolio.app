import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <nav className="flex gap-3 text-sm">
        <Button onClick={() => navigate('/')}>홈</Button>
        <Button onClick={() => navigate('/project')}>프로젝트</Button>
      </nav>
    </NavWrapper>
  );
}
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Button = styled.button`
  &:hover {
    color: #0000df;
  }
`;

export default Nav;
