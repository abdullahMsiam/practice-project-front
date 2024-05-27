import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import DashboardLayout from '../layouts/DashboardLayout';
import About from '../pages/About';



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />
    }
])

export default router;