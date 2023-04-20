import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';

const Routes = () => {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/blogs',
                    element: <Blogs></Blogs>
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Routes;