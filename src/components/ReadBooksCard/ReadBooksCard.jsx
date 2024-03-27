import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { FaFileAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const ReadBooksCard = ({ book }) => {
  const {
    id,
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  return (
    <div className="border-2 border-[#F3F3F3] p-5 rounded-2xl flex flex-col md:flex-row gap-5 items-center">
      <div className="bg-[#F3F3F3] flex justify-center items-center p-2 rounded-2xl w-full md:w-1/5">
        <img className="w-40" src={image} alt="" />
      </div>
      <div className="space-y-4 md:w-4/5 w-full">
        <h2 className="text-xl md:text-2xl font-bold font_playfair">
          {bookName}
        </h2>
        <h3 className="font-medium">By : {author}</h3>
        <div className="flex flex-col md:flex-row gap-3">
          <h3 className="font-bold">Tag</h3>

          {tags.map((tag, index) => (
            <Link
              key={index}
              className="mr-2 px-2 bg-[#F3F3F3] text-[#23BE0A] rounded-xl"
            >
              #{tag}
            </Link>
          ))}

          <p className="flex gap-2 items-center">
            <FaLocationDot />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <p className="flex items-center gap-2">
            <LuUsers />
            Publisher:
            <span>{publisher}</span>
          </p>

          <p className="flex items-center gap-2">
            <FaFileAlt />
            Page:
            <span>{totalPages}</span>
          </p>
        </div>

        <div className="*:px-2 *:py-1 *:rounded-xl *:mr-5 flex flex-col gap-4 md:flex-row text-center">
          <Link className="bg-[#E0EEFF] text-[#326098]">
            Category: {category}
          </Link>

          <Link className="bg-[#FFF3E1] text-[#e0a54d]">Rating: {rating}</Link>

          <Link to={`/book/${id}`} className="bg-[#23BE0A] text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

ReadBooksCard.propTypes = {
  book: PropTypes.object,
};

export default ReadBooksCard;
