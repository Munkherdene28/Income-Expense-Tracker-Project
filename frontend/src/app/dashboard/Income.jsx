import Geld from "../Image/Geld.png";
import Up from "../SVG/Up";
import Down from "../SVG/Down";
export default function income() {
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
    <div className="flex gap-12">
      <div className="w-[395px] h-[225px] rounded-lg">
        <img src={Geld} />
      </div>
      <div className="flex gap-12">
        {incomeData.map((data, index) => (
          <div key={index} className="bg-white w-[390px] h-[225px] rounded-lg">
            <div className="flex items-center py-3 px-4 gap-2">
              <div className="bg-green-400 w-[10px] h-[10px] rounded-3xl"></div>
              <h1 className="text-lg font-semibold">{data.title}</h1>
            </div>
            <hr />
            <div className="flex flex-col gap-4 px-6 pb-8 pt-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">{data.amount}</h1>
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
  );
}
