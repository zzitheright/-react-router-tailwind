import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
    return(
        <FooterStyle>
            <CorpList>
                <li>
                    <Link to='/'>이용약관</Link>
                </li>
                <li>
                    <Link to='/'>개인정보처리방침</Link>
                </li>
                <li>
                    <Link to='/'>고객센터</Link>
                </li>
            </CorpList>
            <p className="copyright">copyright &copy; 2024 company. All right reserved.</p>
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    padding: 20px 10px; 
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    background: ${(props) => props.theme.colors.gray[100]};
    

    .copyright {
        margin-top: 10px;
        opacity:  0.5;
    }
`

const CorpList = styled.ul`
    display: flex;
    justify-content: center;

    li {
        &::before {
            content:"|";
            margin: 0 3px;
        }
        &:first-child::before {
            content:"";
        }
    }

    a {
        display: inline-block;
        padding: 10px;
    }

`

export default Footer;