import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";
import { getLsReadBooksData } from "../../utils/LocalStorage";
import { useLoaderData } from "react-router-dom";

const BooksTabList = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [readBookList, setReadBookList] = useState([]);
  const allData = useLoaderData();

  useEffect(() => {
    const readBooks = getLsReadBooksData();
    const readBooksData = [];

    for (const id of readBooks) {
      const matchData = allData.find((book) => book.id === id);
      readBooksData.push(matchData);
    }
    setReadBookList(readBooksData);
  }, [allData]);

  console.log(readBookList);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
      </TabList>
      <TabPanel>
        <div className="grid grid-cols-1 gap-5 p-5">
          {readBookList.map((item, index) => (
            <ReadBooksCard key={index} book={item} />
          ))}
        </div>
      </TabPanel>
      <TabPanel>Wishlist Books</TabPanel>
    </Tabs>
  );
};

export default BooksTabList;
