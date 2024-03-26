import BookCard from "../BookCard/BookCard";

const Books = () => {
  return (
    <div className="my-20">
      <h1 className="sectionTitle font-bold text-4xl font_playfair mb-8 text-center">Books</h1>
      <div className="booksContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default Books;
