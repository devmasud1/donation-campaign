
import AllCategories from "../AllCategories/AllCategories";
import Header from "../../Components/Header/Header";
import { useEffect, useState } from "react";

const Home = () => {

  const [category, setCategory] = useState([]);
  const [originalCategory, setOriginalCategory] = useState([]);

  useEffect(() => {
    fetch("/AllData.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        setOriginalCategory(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchByUser = e.target.name.value.toLowerCase();

    if (searchByUser.trim() === "") {
      setCategory(originalCategory);
    } else {
      const filterItem = originalCategory.filter(
        (item) => item.category.toLowerCase() === searchByUser
      );
      setCategory(filterItem);
    }

    e.target.name.value = "";
  };

  return (
    <div>
      <div className="mb-10 md:mb-20">
        <Header handleSubmit={handleSubmit}></Header>
      </div>
      <AllCategories category={category}></AllCategories>
    </div>
  );
};

export default Home;
