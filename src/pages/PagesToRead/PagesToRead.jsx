import BarChartt from "../../components/BarChartt/BarChartt";
import "./PagesToRead.css";

const PagesToRead = () => {
  return (
    <div className="flex justify-center items-center minHeight">
      <div className="bg-[#F3F3F3] p-10 rounded-xl">
        <BarChartt />
      </div>
    </div>
  );
};

export default PagesToRead;
