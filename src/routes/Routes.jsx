import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import DashboardLayout from '../layouts/DashboardLayout';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './private/PrivateRoute';



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
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: (

                    <Dashboard />
                )
            }
        ]
    }
])

export default router;