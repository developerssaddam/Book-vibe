import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <Link>
      <div className="bookCard border-2 border-[#F3F3F3] p-5 rounded-2xl space-y-4">
        <div className="bg-[#F3F3F3] p-5 flex justify-center items-center rounded-2xl">
          <img className="w-[160px]" src="http://localhost:5173/src/assets/img/1.png" alt="" />
        </div>
        <div className="font-medium text-[#23BE0A] *:bg-[#F3F3F3] flex gap-3 *:px-3 *:rounded-3xl">
          <h3>Young Aduit</h3>
          <h3>Identity</h3>
        </div>
        <h2 className="text-2xl font-bold font_playfair">
          The Catcher in the Rye
        </h2>
        <p className="font-medium border-b-2 border-dashed pb-3">
          By : Awlad Hossain
        </p>
        <div className="font-medium flex justify-between">
          <h4>Flction</h4>
          <h4 className="flex items-center gap-2">
            {" "}
            5.00 <FaRegStar />
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
