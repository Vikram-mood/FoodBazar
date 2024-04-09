import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Hearder";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Error from "./Error";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";


/***
 * 
 * 1. Header
 *      -logo
 *      -links
 * 
 * 2. Body
 *      -Search
 *      -Restaurents
 *         -res-cards
 *            -res-name, image, rating,other names, time
 * 3. Footer
 *      -copyright
 *      -links
 * 
 */

const About=lazy(()=>import("./components/About"));






const AppLayout = () => {
        return (
                <div className="applayout">
                        <div className="Header">
                                <Header />
                        </div>
                        <div className="Body">
                                <Outlet />
                        </div>
                </div>


        )
};

const appRouter = createBrowserRouter([
        {
                path: "/",
                element: <AppLayout />,
                errorElement: <Error />,
                children: [
                        {
                                path:"/",
                                element:<Body />
                        },
                        {
                                path: "/about",
                                element: (<Suspense fallback={<h1>Laoding...</h1>}><About /></Suspense>)
                        },
                        {
                                path: "/contact",
                                element: <Contact />
                        },
                        {
                                path:"/restaurant/:resId",
                                element:<RestaurantMenu />,
                                errorElement:<Error />
                                
                        }
                        
                
                ]


        },
        
])

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);