import { useLoaderData } from "react-router-dom";
import AllCategories from "../AllCategories/AllCategories";
import Header from "../../Components/Header/Header";

const Home = () => {
  const AllData = useLoaderData();

  return (
    <div>
      <div className="mb-20">
        <Header></Header>
      </div>
      <AllCategories AllData={AllData}></AllCategories>
    </div>
  );
};

export default Home;
