import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";
import PropTypes from "prop-types";

const BooksTabList = ({ readBookList, wishListData }) => {
  const [tabIndex, setTabIndex] = useState(0);
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
      <TabPanel>
        <div className="grid grid-cols-1 gap-5 p-5">
          {wishListData.map((item, index) => (
            <ReadBooksCard key={index} book={item} />
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

BooksTabList.propTypes = {
  readBookList: PropTypes.array,
  wishListData: PropTypes.array,
};

export default BooksTabList;
