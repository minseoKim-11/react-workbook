import { CardContainer, Poster, Title, Date, Over } from './styles.js';
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const { id, poster_path, title, release_date } = movie;
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/movies/detail/${id}`);
    };

    return (
        <CardContainer onClick={onClick}>
            <Poster
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
            />
            <Over />
            <Title>{title}</Title>
            <Date>{release_date}</Date>
        </CardContainer>
    );
};

export default MovieCard;
