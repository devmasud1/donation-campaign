import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function Statistics() {
  // Initialize donation as an empty array
  const [donation, setDonation] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load the donation value from local storage
    const donationItem = JSON.parse(localStorage.getItem("donation"));
    if (Array.isArray(donationItem)) {
      setDonation(donationItem.length);
    } else {
      // Handle the case where donationItem is null or not an array
      // You can set a default value or take appropriate action here
      console.warn("Invalid or missing donation data in local storage.");
      setError("Data not found in local storage"); // Set the error message
    }
  }, []);

  const totalDonation = 12;

  const totalResult = (donation / totalDonation) * 100;
  const remaining = 100 - totalResult;

  const data = [
    { name: "Total Donation", value: remaining },
    { name: "Your Donation", value: totalResult },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="max-w-[1440px] mx-auto flex justify-center items-center flex-col">
      {error ? (
        <div className="h-[80vh] flex justify-center items-center flex-col">
          <h2 className="font-bold text-3xl mb-4">You have not donated yet</h2>
          <p>To see statistics, you need to donate to any category</p>
        </div>
      ) : (
        <div>
          <div>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <p>Your Donation</p>
              <h5 className="w-20 h-4 bg-[#00C49F] rounded-sm"></h5>
            </div>
            <div className="flex items-center gap-3">
              <p>Total Donation</p>
              <h5 className="w-20 h-4 bg-[#FF444A] rounded-sm"></h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
