import {CardContainer, Poster,Title,Date,Over} from './styles.js';
const MovieCard = ({ movie }) => {
    const { poster_path, title,release_date } = movie;

    return (
        <>
            <CardContainer>
                <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                <Over/>
                <Title>{title}</Title>
                <Date>{release_date}</Date>
            </CardContainer>
        </>
    );
};

export default MovieCard;