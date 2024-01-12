import Home from "../SVG/Home";
export default function record() {
  const Lending = [
    {
      svg: <Home />,
      text: "Lending & Renting",
      date: "3 hours ago",
      expense: "-1,000₮",
    },
    {
      svg: <Home />,
      text: "Lending & Renting",
      date: "3 hours ago",
      expense: "-1,000₮",
    },
    {
      svg: <Home />,
      text: "Lending & Renting",
      date: "3 hours ago",
      expense: "-1,000₮",
    },
    {
      svg: <Home />,
      text: "Lending & Renting",
      date: "3 hours ago",
      expense: "-1,000₮",
    },
    {
      svg: <Home />,
      text: "Lending & Renting",
      date: "3 hours ago",
      expense: "-1,000₮",
    },
  ];
  return (
    <div className="flex w-[1270px] flex-col items-start bg-white h-[450px] rounded-lg">
      <div className=" flex p-6">
        <h1 className="text-md font-semibold">Last Records</h1>
      </div>
      <hr />
      <div className="flex flex-col gap-8 items-start px-6">
        {Lending.map((data, index) => (
          <div key={index} className="flex justify-between w-[1220px]">
            <div className="flex gap-4">
              <div>{data.svg}</div>
              <div>
                <h1>{data.text}</h1>
                <p className="text-gray-500 text-sm">{data.date}</p>
              </div>
            </div>
            <div className="text-green-500">{data.expense}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
