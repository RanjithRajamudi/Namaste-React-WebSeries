import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Body from './components/Body/Body';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu';
import Error from './components/Error/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Shimmer from './components/Shimmer/Shimmer';

// Chunking
// Code Splitting
// Dynamic BUndling
// Lazy loading
// On demand loading
// Dynamic import

const Grocery = lazy(() => import('./components/Grocery/Grocery'));

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
        }, {
            path: '/grocery',
            element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>

        }, {
            path: '/restaurants/:resId',
            element: <RestaurantMenu />
        }],
        errorElement: <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);