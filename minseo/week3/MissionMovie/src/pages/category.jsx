import { Link } from "react-router-dom";

const CategoryPage = () => {
    const categories = ["popular", "now_playing", "top_rated", "upcoming"];

    return (
        <div>
            <h2>카테고리 선택</h2>
            {categories.map((type) => (
                <Link key={type} to={`/movies/${type}`}>
                    <button>{type}</button>
                </Link>
            ))}
        </div>
    );
};

export default CategoryPage;
