import { Link } from "react-router-dom";
import bannerImg from "../../assets/img/1.png";

const Hero = () => {
  return (
    <div className="bg-[#F3F3F3] md:px-16 lg:px-28 py-16 rounded-3xl">
      <div className="flex flex-col-reverse gap-6 md:flex-row md:justify-between items-center">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-10 font_playfair">
            Books to freshen up <br /> your bookshelf
          </h1>

          <Link
            to="/listedbooks"
            className="btn bg-[#23BE0A] text-white font-bold"
          >
            View The List
          </Link>
        </div>
        <img src={bannerImg} className="max-w-md rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
