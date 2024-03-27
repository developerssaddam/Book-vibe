import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  setReadBooksDataToLs,
  getLsReadBooksData,
  getLsWishListData,
  setWishListDataToLs,
} from "../../utils/LocalStorage";
import { toast } from "react-toastify";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const matchData = books.find((book) => book.id === parseInt(id));

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = matchData;

  // handleReadBooks
  const handleReadBooks = (id) => {
    const lsData = getLsReadBooksData();
    if (lsData.includes(id)) {
      return toast.error("Already read this book!");
    }
    setReadBooksDataToLs(id);
    toast.success("Congratulation! you have successfully reading this book");
  };

  // handleWishList.
  const handleWishList = (id) => {
    const lsData = getLsWishListData();
    const readBookData = getLsReadBooksData();
    if (lsData.includes(id)) {
      return toast.error("Already added this book");
    } else if (readBookData.includes(id)) {
      return toast.error("Already read this book!");
    }
    setWishListDataToLs(id);
    toast.success("You have successfully added this book wishlist!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 lg:gap-10 lg:my-12 p-4">
      <div className="bg-[#F3F3F3] flex justify-center items-center p-16 rounded-2xl flex-1">
        <img className="w-full rounded-xl object-cover" src={image} alt="" />
      </div>
      <div className="details flex-1 space-y-5">
        <h2 className="text-2xl lg:text-4xl font-bold font_playfair">
          {bookName}
        </h2>
        <p className="text-xl font-medium">By : {author}</p>
        <h4 className="text-xl font-medium border-y-2 border-[#F3F3F3] py-2">
          {category}
        </h4>
        <p>
          <span className="text-lg font-extrabold">Review :</span> {review}
        </p>
        <div className="flex gap-5">
          <h3 className="font-extrabold">Tag</h3>
          {tags.map((tag, index) => (
            <Link
              key={index}
              className="bg-[#F3F3F3] text-[#23BE0A] px-2 rounded-3xl"
            >
              #{tag}
            </Link>
          ))}
        </div>

        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Number of pages</td>
              <td className="font-bold">{totalPages}</td>
            </tr>

            <tr>
              <td>Publisher:</td>
              <td className="font-bold">{publisher}</td>
            </tr>

            <tr>
              <td>Year of Publishing:</td>
              <td className="font-bold">{yearOfPublishing}</td>
            </tr>

            <tr>
              <td>Rating:</td>
              <td className="font-bold">{rating}</td>
            </tr>
          </tbody>
        </table>

        <div className="*:px-5">
          <button
            onClick={() => handleReadBooks(matchData.id)}
            className="btn btn-outline mr-5"
          >
            Read
          </button>
          <button
            onClick={() => handleWishList(matchData.id)}
            className="btn bg-[#59C6D2] text-white"
          >
            wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
