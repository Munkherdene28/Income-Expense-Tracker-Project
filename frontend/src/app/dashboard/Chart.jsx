import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function chart() {
  ChartJS.register(ArcElement);
  ChartJS.register(Tooltip);
  ChartJS.register(Legend);
  const data = {
    labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
    datasets: [
      {
        data: [1, 2, 3, 4, 5],
        backgroundColor: [
          "#16BDCA",
          "#1C64F2",
          "#F2901C",
          "#E74694",
          "#FDBA8C",
        ],
        cutout: 55,
        borderColor: ["#16BDCA", "#1C64F2", "#F2901C", "#E74694", "#FDBA8C"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex gap-12">
      <div className="bg-white w-[610px] h-[313px] rounded-xl">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Income - Expense</h1>
          <p className="text-gray-500">Jun 1 - Nov 30</p>
        </div>
        <hr />
        <div className="flex gap-[60px] px-6 bg-white rounded-lg"></div>
      </div>
      <div className="bg-white w-[610px] h-[250px] rounded-xl">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Income - Expense</h1>
          <p className="text-gray-500">Jun 1 - Nov 30</p>
        </div>
        <hr />
        <div className="flex gap-[60px] px-6 py-8 bg-white rounded-lg">
          <div className="w-[180px] h-[180px]">
            <Doughnut data={data} options={options} />
          </div>
          <div className="flex flex-col gap-4">
            {data.labels.map((label, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                />
                <div className="flex gap-4">
                  <h2 className="text-md">{label}</h2>
                  <p className="flex items-center text-md">5’000’000₮</p>
                  <p className="text-gray-500 text-md">15.50%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
