import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { FaFileAlt } from "react-icons/fa";

const ReadBooksCard = () => {
  return (
    <div className="border-2 border-[#F3F3F3] p-5 rounded-2xl flex flex-col md:flex-row gap-5 items-center">
      <div className="bg-[#F3F3F3] flex justify-center items-center p-2 rounded-2xl w-full md:w-1/5">
        <img
          className="max-w-40"
          src="http://localhost:5173/src/assets/img/1.png"
          alt=""
        />
      </div>
      <div className="space-y-4 md:w-4/5 w-full">
        <h2 className="text-xl md:text-2xl font-bold font_playfair">
          The Catcher in the Rye
        </h2>
        <h3 className="font-medium">By : Awlad Hossain</h3>
        <div className="flex flex-col md:flex-row gap-3">
          <h3 className="font-bold">Tag</h3>
          <Link className="mr-2 px-2 bg-[#F3F3F3] text-[#23BE0A] rounded-xl">
            #Young Adult
          </Link>
          <Link className="mr-2 px-2 bg-[#F3F3F3] text-[#23BE0A] rounded-xl">
            #Young Adult
          </Link>
          <p className="flex gap-2 items-center">
            <FaLocationDot />
            Year of Publishing: 1924
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <p className="flex items-center gap-2">
            <LuUsers />
            Publisher:
            <span>Scribner</span>
          </p>

          <p className="flex items-center gap-2">
            <FaFileAlt />
            Page:
            <span>192</span>
          </p>
        </div>

        <div className="*:px-2 *:py-1 *:rounded-xl *:mr-5 flex flex-col gap-4 md:flex-row">
          <Link className="bg-[#E0EEFF] text-[#326098]">Category: Classic</Link>

          <Link className="bg-[#FFF3E1] text-[#e0a54d]">Rating: Classic</Link>

          <Link className="bg-[#23BE0A] text-white">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBooksCard;
