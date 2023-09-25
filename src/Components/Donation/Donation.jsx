import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [storeData, setStoreData] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [noData, setNoData] = useState("");

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("donation"));

    if (!localStorageData || localStorageData.length === 0) {
      setNoData("Your donation is empty");
    } else {
      setStoreData(localStorageData);
    }
  }, []);

  return (
    <div className="max-w-[1440px] mx-5 lg:mx-auto my-10 md:my-20">
      {noData ? (
        <p className="h-[70vh] flex justify-center items-center text-2xl font-bold">
          {noData}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
            {isShow
              ? storeData?.map((data) => (
                  <DonationCard key={data.id} data={data}></DonationCard>
                ))
              : storeData
                  .slice(0, 4)
                  ?.map((data) => (
                    <DonationCard key={data.id} data={data}></DonationCard>
                  ))}
          </div>
          <div>
            {storeData.length > 4 ? (
              <div className="text-center">
                <button
                  onClick={() => setIsShow(!isShow)}
                  className="bg-[#009444] py-2 px-4 my-10 text-cyan-50 text-center"
                >
                  {isShow ? "show less" : "show more"}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;

/* <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
        {isShow
          ? storeData?.map((data) => (
              <DonationCard key={data.id} data={data}></DonationCard>
            ))
          : storeData
              .slice(0, 4)
              ?.map((data) => (
                <DonationCard key={data.id} data={data}></DonationCard>
              ))}
      </div>
      <div>
      {storeData.length >= 4 ? (
        <div className="text-center">
          <button
            onClick={() => setIsShow(!isShow)}
            className="bg-[#009444] py-2 px-4 my-10 text-cyan-50 text-center"
          >
            {isShow ? "show less" : "show more"}
          </button>
        </div>
      ) : (
        ""
      )}
      </div> */
