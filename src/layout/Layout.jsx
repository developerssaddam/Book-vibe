import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
