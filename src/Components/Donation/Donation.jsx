import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("donation"));
    setStoreData(localStorageData);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
        {storeData?.map((data) => (
          <DonationCard key={data.id} data={data}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default Donation;
