import { Link, useLocation } from "react-router-dom";
import Logo from "../common/Logo";
import Button, { GhostButton } from "../button/Button";
import tw from "twin.macro";
import styled from "styled-components";

function Header() {
  const location = useLocation();

  return(
    <header className="flex justify-between items-center bg-gray-100 p-5 bg-primary border-b-2 border-indigo-500">
      {/* <h1>logo</h1> */}
      <Logo />
      <Gnb>
        <ul>
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
      </Gnb>

      <div>
        <Button default>마이페이지</Button>
        <Button>마이페이지</Button>
        {/* <GhostButton>로그인</GhostButton> */}
      </div>
    </header>
  )
}

// const Gnb = tw.nav`
//   bg-secondary p-3
// `

const Gnb = styled.nav`
  ul {
    ${tw`flex gap-6`}
    li {
    }
  }
`
export default Header;