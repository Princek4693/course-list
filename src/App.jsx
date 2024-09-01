import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import CourseList from "./components/CourseList";
import LoginPage from "./components/LoginPage";
import CourseDetails from "./components/CourseDetails";





const App = () => {




    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage />,
        },
        {
            path: '/home',
            element: <HomePage />,
            children : [
                {
                    path: '/home/course',
                    element: <CourseList />
                },
                {
                    path: "/home/course/:course_id",
                    element: <CourseDetails />,
                },
                {
                    path: '/home/about',
                    element: <About />,
                }
            ]
        }
    ])

    return (
        <div>
           <RouterProvider router={appRouter}/>
        </div>
    );
};

export default App;
