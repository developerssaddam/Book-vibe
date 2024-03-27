import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { getLsReadBooksData } from "../../utils/LocalStorage";
import { useLoaderData } from "react-router-dom";

const BarChartt = () => {
  const [readBookList, setReadBookList] = useState([]);
  const allData = useLoaderData();
  const data = readBookList;

  useEffect(() => {
    const readBooks = getLsReadBooksData();
    const readBooksData = [];
    for (const id of readBooks) {
      const matchData = allData.find((book) => book.id === id);
      readBooksData.push(matchData);
    }
    setReadBookList(readBooksData);
  }, [allData]);

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <BarChart width={800} height={500} data={data}>
      <Bar dataKey="totalPages" fill="#59C6D2" shape={<TriangleBar />} />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    </BarChart>
  );
};

export default BarChartt;
