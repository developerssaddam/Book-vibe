import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  const { id, bookName, author, image, category, rating, tags } = book;
  return (
    <Link  to={`/book/${id}`}>
      <div className="bookCard border-2 border-[#F3F3F3] p-6 rounded-2xl space-y-4">
        <div className="bg-[#F3F3F3] p-10 flex justify-center items-center rounded-2xl">
          <img className="w-[150px] h-[180px]" src={image} alt="" />
        </div>
        <div className="font-medium text-[#23BE0A] *:bg-[#F3F3F3] flex gap-3 *:px-3 *:rounded-3xl">
          {tags.map((tag, index) => (
            <h3 key={index}>{tag}</h3>
          ))}
        </div>
        <h2 className="text-2xl font-bold font_playfair">{bookName}</h2>
        <p className="font-medium border-b-2 border-dashed pb-3">
          By : {author}
        </p>
        <div className="font-medium flex justify-between">
          <h4>{category}</h4>
          <h4 className="flex items-center gap-2">
            {" "}
            {rating} <FaRegStar />
          </h4>
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
