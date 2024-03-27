import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import BookDetails from "../components/BookDetails/BookDetails";

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
        loader: () => fetch("/db.json"),
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

      {
        path: "/signin",
        element: <SignIn />,
      },

      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch("/db.json"),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default Router;
