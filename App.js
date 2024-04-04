import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore.js";

// import Grocery from "./src/components/Grocery.jsx";

// Parcel --> Bundling --> more then 1 final .js (Bundle) file
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic import

const Grocery = lazy(() => import("./src/components/Grocery.jsx"));
const About = lazy(() => import("./src/components/About.jsx"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  //Authentication
  useEffect(() => {
    //API call
    const data = { userName: "Test User" };
    setUserName(data.userName);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ defaultUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          {/* <Body /> */}
          {/*  <h1 id="heading">Hello World From App.js!</h1> */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        // element: <About />,
        element: (
          <Suspense
            fallback={() => {
              <>
                <h1>Loading...</h1>;
                <Shimmer />
              </>;
            }}
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      // Parcel --> Bundling --> more then 1 final .js (Bundle) file
      // Chunking
      // Code Splitting
      // Dynamic Bundling
      // Lazy Loading
      // On Demand Loading
      // Dynamic import

      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <>
                <h1>Loading...</h1>
                <Shimmer />
              </>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  // { path: "/about", element: <About /> },
  // { path: "/contact", element: <Contact /> },
]);

// root.render(<AppLayout />);
root.render(<RouterProvider router={rootRouter} />);
