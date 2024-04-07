import { Link, useLocation } from "react-router-dom";
import Logo from "../common/Logo";
import Button, { GhostButton } from "../button/Button";

function Header() {
  const location = useLocation();

  return(
    <header className="flex justify-between items-center bg-gray-100 p-5 border-b-2 border-indigo-500">
      {/* <h1>logo</h1> */}
      <Logo />
      <nav>
        <ul className="flex gap-6">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === '/login' ? 'active' : ''}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Button default>마이페이지</Button>
        <Button>마이페이지</Button>
        {/* <GhostButton>로그인</GhostButton> */}
      </div>
    </header>
  )
}

export default Header;