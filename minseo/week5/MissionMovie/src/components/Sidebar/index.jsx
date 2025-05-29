import { MdOutlineSearch } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import {Container, Search, Movie } from "./styles.js";
import {Link} from "react-router-dom";

const Sidebar =()=>{
    return(
    <Container>
        <Search>
            <Link to={'search'}>
                <MdOutlineSearch size={'16px'} color={'white'}/> 검색
            </Link>
        </Search>

        <Movie>
            <Link to={'category'}>
                    <RiMovie2Fill size={'16px'} color={'white'}/> 카테고리
            </Link>
        </Movie>

    </Container>
    );
};
export default Sidebar;