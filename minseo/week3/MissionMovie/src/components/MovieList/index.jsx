import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/index.jsx";
import {MovieGrid} from "./styles.js";

const BASE_URL = "https://api.themoviedb.org/3/movie";

const getTokenByType = (type) => {
    switch (type) {
        case "popular":
            return import.meta.env.VITE_TMDB_POP_TOKEN;
        case "now_playing":
            return import.meta.env.VITE_TMDB_NOW_TOKEN;
        case "top_rated":
            return import.meta.env.VITE_TMDB_TOP_TOKEN;
        case "upcoming":
            return import.meta.env.VITE_TMDB_UP_TOKEN;
        default:
            return "";
    }
};

const MovieList = ({ type }) => {
    const [movies, setMovies] = useState([]);
    // 디버깅용옹오오옹ㅇㅇ
    console.log(type)
    useEffect(() => {
        const fetchData = async () => {
            const token = getTokenByType(type);
            console.log(token);  //디벙기용ㅇㅇ요용ㅇ
            try {
                const res = await axios.get(`${BASE_URL}/${type}?language=ko-KR&page=1`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        accept: "application/json",
                    },
                });
                setMovies(res.data.results);
            } catch (err) {
                console.error("영화 불러오기 실패:", err);
            }
        };

        fetchData();
    }, [type]);

    return (
        <MovieGrid>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </MovieGrid>
    );
};

export default MovieList;
