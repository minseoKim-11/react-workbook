import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/root-latout.jsx";
import MovieCard from "./components/MovieCard.jsx";
import SignupPage from "./pages/singup.jsx";


const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                index:true,
                element:<MovieCard/>
            },
            {
                path:'login',
                element:<SignupPage/>
            }
            // {
            //     path:'signup',
            //     element:<MoviePage/>
            // },
            // {
            //     path:'search',
            //     element:<MoviePage/>
            // }
        ]
    }]
)
function App() {
    return(
        <RouterProvider router={router}/>
    )
}

export default App;
