import Vector from "@/app/SVG/Vector";
import Plus from "@/app/SVG/Plus";
import Up from "../SVG/Up";
import Down from "../SVG/Down";
import Chart from "chart.js/auto";
export default function dashboard() {
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
      <div className="bg-gray-100 w-screen-full h-screen px-80 py-8 flex">
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
                  <div className="flex gap-2">
                    {data.Up}
                    <h1 className="text-lg">{data.percentageChange}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
