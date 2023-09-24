import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [category, setCategory] = useState([]);

  const { id } = useParams();
  const AllData = useLoaderData();

  useEffect(() => {
    const singleItem = AllData.find((data) => data.id == id);
    setCategory(singleItem);
  }, [AllData, id]);

  return (
    <div>
      <CategoryCard category={category}></CategoryCard>
    </div>
  );
};

export default Category;
