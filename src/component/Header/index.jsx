import { NavLink } from 'react-router-dom';
import Nav from '../Nav';

function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/">
          <h1 className="font-bold text-xl">기술 스택</h1>
        </NavLink>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
