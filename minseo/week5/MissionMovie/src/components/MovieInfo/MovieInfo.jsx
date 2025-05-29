import styled from "styled-components";
import { useParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const Info = styled.div`
    color: white;
`;

const Title = styled.h1`
    font-size: 24px;
`;

const SubInfo = styled.p`
    font-size: 14px;
    margin: 4px 0;
`;

const MovieInfo = () => {
    console.log("컴포넌트 렌더링 됨");
    const { id } = useParams();
    const { data, isLoading, isError } = useCustomFetch(`/${id}?language=ko-KR`);
    console.log("받아온 것:", data);

    if (isLoading) return <p>로딩 중...</p>;
    if (isError || !data) return <p>에러 발생</p>;

    return (
        <Container>
            <Info>
                <Title>{data.title}</Title>
                <SubInfo>개봉일: {data.release_date}</SubInfo>
            </Info>
        </Container>
    );
};

export default MovieInfo;
