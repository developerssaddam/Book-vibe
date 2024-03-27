import { useContext } from "react";
import BookCard from "../BookCard/BookCard";
import PropTypes from "prop-types";
import { BookContext } from "../../layout/Layout";

const Books = ({ handleSingleBook }) => {
  const books = useContext(BookContext);

  return (
    <div className="my-20">
      <h1 className="sectionTitle font-bold text-4xl font_playfair mb-8 text-center">
        Books
      </h1>
      <div className="booksContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            handleSingleBook={handleSingleBook}
          />
        ))}
      </div>
    </div>
  );
};

Books.propTypes = {
  handleSingleBook: PropTypes.func,
};

export default Books;
