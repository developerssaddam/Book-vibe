import { IoIosArrowDown } from "react-icons/io";
import BooksTabList from "../../components/BooksTabList/BooksTabList";
import {
  getLsReadBooksData,
  getLsWishListData,
} from "../../utils/LocalStorage";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const ListedBooks = () => {
  const allData = useLoaderData();
  const [readBookList, setReadBookList] = useState([]);
  const [wishListData, setWishListData] = useState([]);

  useEffect(() => {
    const readBooks = getLsReadBooksData();
    const readBooksData = [];
    for (const id of readBooks) {
      const matchData = allData.find((book) => book.id === id);
      readBooksData.push(matchData);
    }
    setReadBookList(readBooksData);
  }, []);

  useEffect(() => {
    const wishList = getLsWishListData();
    const wish_list_data = [];
    for (const id of wishList) {
      const matchData = allData.find((book) => book.id === id);
      wish_list_data.push(matchData);
    }
    setWishListData(wish_list_data);
  }, []);

  // handleSortByRating.
  const handleReadBookSort = () => {
    const sortByRatingReadBook = readBookList.sort(
      (a, b) => a.rating - b.rating
    );
    const sortByRatingWishList = wishListData.sort(
      (a, b) => a.rating - b.rating
    );
    setReadBookList(sortByRatingReadBook);
    setWishListData(sortByRatingWishList);
  };

  // handleSortByNumberOfPages.
  const handleSortByNumberOfPages = () => {
    const sortByNumberOfPagesReadBook = readBookList.sort(
      (a, b) => a.totalPages - b.totalPages
    );
    const sortByNumberOfPagesWishList = wishListData.sort(
      (a, b) => a.totalPages - b.totalPages
    );
    setReadBookList(sortByNumberOfPagesReadBook);
    setWishListData(sortByNumberOfPagesWishList);
  };

  // handleSortByPublishYear.
  const handleSortByPublishYear = () => {
    const sortByPublishYearReadBook = readBookList.sort(
      (a, b) => a.yearOfPublishing - b.yearOfPublishing
    );
    const sortByPublishYearWishList = wishListData.sort(
      (a, b) => a.yearOfPublishing - b.yearOfPublishing
    );
    setReadBookList(sortByPublishYearReadBook);
    setWishListData(sortByPublishYearWishList);
  };

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
            <Link onClick={handleReadBookSort}>Rating</Link>
          </li>
          <li>
            <Link onClick={handleSortByNumberOfPages}>Number of pages</Link>
          </li>
          <li>
            <Link onClick={handleSortByPublishYear}>Published year</Link>
          </li>
        </ul>
      </div>

      <div className="my-5">
        <BooksTabList readBookList={readBookList} wishListData={wishListData} />
      </div>
    </div>
  );
};

export default ListedBooks;
