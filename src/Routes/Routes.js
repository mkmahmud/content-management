import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';

const Routes = () => {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Routes;