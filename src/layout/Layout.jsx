import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BookContext = createContext();

const Layout = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container mx-auto">
      <nav>
        <NavBar />
      </nav>
      <BookContext.Provider value={books}>
        <main>
          <Outlet />
        </main>
      </BookContext.Provider>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
