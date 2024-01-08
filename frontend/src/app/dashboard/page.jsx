"use client";
import Vector from "@/app/SVG/Vector";
import Plus from "@/app/SVG/Plus";
import Up from "../SVG/Up";
import Down from "../SVG/Down";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function dashboard() {
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
  const incomeData = [
    {
      title: "Your Income",
      amount: "1,200,000₮",
      description: "Your Income Amount",
      percentageChange: "32% from last month",
      Up: <Up />,
    },
    {
      title: "Total Expenses",
      amount: "-1,200,000₮",
      description: "Your Income Amount",
      Up: <Down />,
      percentageChange: "32% from last month",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center px-80 py-3">
        <div className="flex items-center gap-5">
          <Vector />
          <h1 className="text-xm font-bold">Dashboard</h1>
          <p>Records</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="btn btn-primary btn-sm">
            <Plus /> Record
          </button>
          <div className="avatar">
            <div className="w-10 rounded-full ">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-screen-full h-screen px-80 py-8 flex flex-col">
        <div className="flex gap-12">
          <div className="flex gap-4 w-[500px]">
            <div className="skeleton h-[250px] w-full"></div>
          </div>
          <div className="flex gap-12">
            {incomeData.map((data, index) => (
              <div
                key={index}
                className="bg-white w-[500px] h-[250px] skeleton"
              >
                <div className="flex items-center py-4 px-4 gap-2">
                  <div className="bg-green-400 w-[10px] h-[10px] rounded-3xl"></div>
                  <h1 className="text-lg font-semibold">{data.title}</h1>
                </div>
                <hr />
                <div className="flex flex-col gap-8 px-6 py-6">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">{data.amount}</h1>
                    <p className="text-gray-500 text-xl">{data.description}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    {data.Up}
                    <h1 className="text-lg">{data.percentageChange}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-20">
          <div className="bg-white w-[700px] h-[320px] rounded-lg">
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
                        backgroundColor:
                          data.datasets[0].backgroundColor[index],
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
          <div className="bg-white w-[700px] h-[320px] rounded-lg">
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
                        backgroundColor:
                          data.datasets[0].backgroundColor[index],
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
      </div>
    </div>
  );
}
