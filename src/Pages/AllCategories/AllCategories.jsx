import AllCategoriesCard from "./AllCategoriesCard";

const AllCategories = ({ AllData }) => {
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {AllData?.map((data) => (
        <AllCategoriesCard key={data.id} data={data}></AllCategoriesCard>
      ))}
    </div>
  );
};

export default AllCategories;
