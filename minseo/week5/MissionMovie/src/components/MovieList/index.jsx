import MovieCard from "../MovieCard/index.jsx";
import {MovieGrid} from "./styles.js";
import useCustomFetch from "../../hooks/useCustomFetch.js";

const MovieList = ({ type }) => {
    const { data, isLoading, isError } = useCustomFetch(`/${type}?language=ko-KR&page=1`);

    if (isLoading) return <p>로딩 중...</p>;
    if (isError) return <p>에러 발생</p>;

    const movies = data?.results || [];

    return (
        <MovieGrid>
            {movies.map((d) => (
                <MovieCard key={d.id} movie={d} />
            ))}
        </MovieGrid>
    );
};
export default MovieList;