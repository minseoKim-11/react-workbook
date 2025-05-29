import styled from "styled-components";
import MovieInfo from "../components/MovieInfo/MovieInfo.jsx";
import MovieDetail from "../components/MovieDetail/MovieDetail.jsx";

export const Container = styled.div`
display: flex;
    flex-direction: column;
    
`

export const TopWrapper=styled.div`
    display: flex;
`

export const BottomWrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const MovieDetailPage=()=>{
    console.log("✅ MovieDetailPage 렌더링됨");
    return (
        <Container>
            <TopWrapper>
                <MovieInfo/>
            </TopWrapper>
            <BottomWrapper>
                <MovieDetail/>
            </BottomWrapper>
        </Container>
    );

}


export default MovieDetailPage;