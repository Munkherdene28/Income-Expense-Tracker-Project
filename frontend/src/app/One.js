"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Utils } from "chart.js";

ChartJS.register(ArcElement);
ChartJS.register(Tooltip);
ChartJS.register(Legend);
const labels = Utils.months({ count: 7 });
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};
const Dashboard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-100 w-[700px] h-[320px] rounded-lg">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Income - Expense</h1>
          <p className="text-gray-500">Jun 1 - Nov 30</p>
        </div>
        <hr />

        <div className="flex gap-[50px] px-6 py-8">
          <div className="w-[180px] h-[180px]">
            <Doughnut data={data} options={options} />
          </div>
          <div className="flex flex-col gap-2">
            {data.labels.map((label, index) => (
              <div key={index} className="flex items-center gap-4 mb-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></div>
                <div className="flex gap-4">
                  <h2 className="text-md">{label}</h2>
                  <p className="flex items-center text-md">5’000’000₮</p>
                  <p className="text-gray-500 text-md">15%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
