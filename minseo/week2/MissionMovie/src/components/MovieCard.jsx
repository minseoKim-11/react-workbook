import MovieImage from "./MovieImage.jsx";
const BASE_URL = "https://image.tmdb.org/t/p/w500";


const MovieCard=()=> {
    return (
        <div className="container">
            <MovieImage baseUrl={BASE_URL} />
        </div>
    );
}

export default MovieCard;
