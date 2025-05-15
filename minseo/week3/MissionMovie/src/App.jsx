import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './components/Layout/index.jsx';
import SignupPage from "./pages/signup.jsx";
import LoginPage from "./pages/login.jsx";
import SearchPage from "./pages/search.jsx";
import CategoryPage from "./pages/category.jsx";
import CategoryResultPage from "./pages/categoryResult.jsx";
import MovieList from "./components/MovieList/index.jsx";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<MovieList type={'popular'}/>
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
                path: '/movies/:type',
                element: <CategoryResultPage />,
            }
        ]
    }]
)


function App() {
    return(
        <RouterProvider router={router}/>
        )
}

export default App;
