import {Link} from 'react-router-dom';
import { MdOutlineMovieCreation } from "react-icons/md";

const Navbar = () => {
    return(
        <nav>
            <Link to={'/'}><MdOutlineMovieCreation /></Link>
            <button>로그인</button>
            <button>회원가입</button>
        </nav>

    )
};

export default Navbar;