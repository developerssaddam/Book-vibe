import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/listedbooks",
        element: <ListedBooks />,
      },

      {
        path: "/pagestoread",
        element: <PagesToRead />,
      },

      {
        path: "/about",
        element: <AboutUs />,
      },

      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default Router;
