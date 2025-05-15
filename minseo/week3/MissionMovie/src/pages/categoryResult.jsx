import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";

const CategoryResultPage = () => {
    const { type } = useParams(); // popular, upcoming 등

    return (
        <div>
            <MovieList type={type} />
        </div>
    );
};

export default CategoryResultPage;
