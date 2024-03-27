import { Link } from "react-router-dom";
import notFoundImg from "../../assets/img/404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[100vh]">
      <img src={notFoundImg} alt="" />
      <Link
        to="/"
        className="bg-[#23BE0A] text-white text-2xl font-bold px-5 py-2 rounded-3xl"
      >
        Go-Back
      </Link>
    </div>
  );
};

export default ErrorPage;
