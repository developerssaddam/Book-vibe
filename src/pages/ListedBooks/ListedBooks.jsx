import { IoIosArrowDown } from "react-icons/io";
import BooksTabList from "../../components/BooksTabList/BooksTabList";

const ListedBooks = () => {
  return (
    <div>
      <h2 className="bg-[#F3F3F3] p-3 md:p-6 font-bold text-xl md:text-3xl rounded-2xl text-center my-6">
        Books
      </h2>

      <div className="dropdown dropdown-bottom flex justify-center mb-16">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-[#23BE0A] text-white font-semibold text-lg"
        >
          Sort By
          <IoIosArrowDown />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      <div className="my-5">
        <BooksTabList />
      </div>
    </div>
  );
};

export default ListedBooks;
