import styled from "styled-components";
import { useParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch.js";

const Container = styled.div`
    color: white;
    padding: 20px;
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 16px;
`;

const CastList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

const PersonCard = styled.div`
    width: 100px;
    text-align: center;
    margin: 10px;
`;

const ProfileImg = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1; 
    object-fit: cover;   
    border-radius: 50%;
    max-width: 150px;     
    height: auto;        
`;

const MovieDetail = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useCustomFetch(`/${id}/credits?language=ko-KR`);

    if (isLoading) return <p>로딩 중...</p>;
    if (isError || !data) return <p>에러 발생</p>;

    return (
        <Container>
            <Title>출연진</Title>
            <CastList>
                {data.cast.map((actor) => (
                    <PersonCard key={actor.id}>
                        <ProfileImg
                            src={
                                actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                    : "https://via.placeholder.com/150"
                            }
                            alt={actor.name}
                        />
                        <p>{actor.name}</p>
                        <p style={{ fontSize: "12px", color: "#ccc" }}>{actor.character}</p>
                    </PersonCard>
                ))}
            </CastList>
        </Container>
    );
};

export default MovieDetail;
