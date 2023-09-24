import { useLoaderData } from "react-router-dom";
import AllCategories from "../AllCategories/AllCategories";

const Home = () => {

  const AllData = useLoaderData();

  return (
    <div>
   
      <AllCategories AllData={AllData}></AllCategories>
    </div>
  )
};

export default Home;
