import Back from "../SVG/Back";
import Go from "../SVG/Go";
import Fork from "../SVG/Fork";
export default function select() {
  const Food = [
    {
      svg: <Fork />,
      text: "Food & Drinks",
      date: "14:00",
      expense: "-1,000₮",
    },
    {
      svg: <Fork />,
      text: "Food & Drinks",
      date: "14:00",
      expense: "-1,000₮",
    },
    {
      svg: <Fork />,
      text: "Food & Drinks",
      date: "14:00",
      expense: "-1,000₮",
    },
    {
      svg: <Fork />,
      text: "Food & Drinks",
      date: "14:00",
      expense: "-1,000₮",
    },
  ];
  return (
    <div className="pt-[50px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between w-[970px] items-center">
            <div className="flex items-center gap-4">
              <button>
                <Back />
              </button>
              <h1>Last 30 Days</h1>
              <button>
                <Go />
              </button>
            </div>
            <div>
              <select className="select select-bordered w-full font-semibold">
                <option>Newest first</option>
                <option>Latest</option>ƒ
              </select>
            </div>
          </div>
          <div className="flex bg-white w-[970px] h-[50px] rounded-xl">
            <div className="flex justify-between w-[970px] items-center p-4">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <h1>Select all</h1>
              </div>
              <div>
                <p className="text-gray-400">-35,500₮</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-md font-bold">Today</h1>
          <div className="flex items-center flex-col gap-4">
            {Food.map((data, index) => (
              <div
                key={index}
                className="flex bg-white w-[970px] h-[60px] rounded-xl"
              >
                <div className="flex justify-between w-[970px] items-center p-4">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="checkbox" />
                    <div className="flex gap-4">
                      <div>{data.svg}</div>
                      <div>
                        <h1>{data.text}</h1>
                        <p className="text-gray-500 text-sm">{data.date}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-red-500">{data.expense}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
