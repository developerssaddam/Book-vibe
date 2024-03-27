import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";

const BooksTabList = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
      </TabList>
      <TabPanel>
        <div className="grid grid-cols-1 gap-5 p-5">
          <ReadBooksCard />
        </div>
      </TabPanel>
      <TabPanel>Wishlist Books</TabPanel>
    </Tabs>
  );
};

export default BooksTabList;
