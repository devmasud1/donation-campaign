import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  // const p= (31/100) * 100
  // console.log(p)

  const data = {
    labels: ["Your Donation", "Total Donation"],
    datasets: [
      {
        label: "# of Votes",
        data: [33, 66],
        backgroundColor: ["#00C49F", "#FF444A"],
        borderColor: ["#fff", "#fff"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-[1440px] mx-auto flex justify-center items-center">
      <Pie data={data} />
    </div>
  );
};

export default Statistics;
