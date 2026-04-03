import { Routes, Route } from 'react-router-dom';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Header from './component/Header';
import Projects from './component/Projects';
import styled from 'styled-components';

function App() {
  return (
    <Main className="bg-gray-100">
      <Header />

      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Projects />} />
        </Routes>
      </Body>
    </Main>
  );
}

const Main = styled.div`
  min-height: 100vh;
`;
const Body = styled.div`
  padding: 2.5rem 1rem;
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
`;

export default App;
