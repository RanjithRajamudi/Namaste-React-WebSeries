import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Body from './components/Body/Body';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu';
import Error from './components/Error/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [{
            path: '/',
            element: <Body />
        }, {
            path: '/about',
            element: <About />
        }, {
            path: '/contact',
            element: <Contact />
        },{
            path: '/restaurants/:resId',
            element: <RestaurantMenu />
        }],
        errorElement: <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);