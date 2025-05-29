import {Link} from 'react-router-dom';
import { MdOutlineMovieCreation } from "react-icons/md";
import {NavContainer,LogoContainer, Button,ButtonContainer} from "./styles.js"
const Navbar = () => {
    return(
        <NavContainer>
            <LogoContainer>
                <Link to={'/'}><MdOutlineMovieCreation size={'30px'} margin={'10px'} /></Link>
            </LogoContainer>
            <ButtonContainer>
                <Link to={'login'}><Button>로그인</Button></Link>
                <Link to={'signup'}><Button>회원가입</Button></Link>
            </ButtonContainer>
        </NavContainer>
    )
};

export default Navbar;