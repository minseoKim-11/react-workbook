import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './components/Layout/index.jsx';
import SignupPage from "./Page/SignupPage.jsx";
import LoginPage from "./Page/LoginPage.jsx";
import SearchPage from "./Page/SearchPage.jsx";
import CategoryPage from "./Page/CategoryPage.jsx";
import CategoryResultPage from "./Page/CategoryResultPage.jsx";
import '../fonts/font.css';
import HomePage from "./Page/HomePage.jsx";
import MovieDetailPage from "./Page/MovieDetailPage.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:'login',
                element:<LoginPage/>
            },
            {
                path:'signup',
                element:<SignupPage/>
            },
            {
                path:'search',
                element:<SearchPage/>
            },
            {
                path:'category',
                element:<CategoryPage/>
            },
            {
                path: 'movies/:type',
                element: <CategoryResultPage />,
            },{
                path: 'movies/detail/:id',
                element: <MovieDetailPage/>, // 상세 페이지 컴포넌트
            },
        ]
    }]
)


function App() {
    return(
        <RouterProvider router={router}/>
        )
}

export default App;
