import Vector from "@/app/SVG/Vector";
import Plus from "@/app/SVG/Plus";
import Up from "../SVG/Up";
import Down from "../SVG/Down";
export default function dashboard() {
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
          <div className="bg-white w-[500px] h-[200px] skeleton">
            <div className="flex items-center py-4 px-4 gap-2">
              <div className="bg-green-400 w-[10px] h-[10px] rounded-3xl"></div>
              <h1 className="text-lg font-semibold">Your Income</h1>
            </div>
            <hr />
            <div className="flex flex-col gap-6 px-6 pb-6 pt-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">1,200,000₮</h1>
                <p className="text-gray-500 text-lg">Your Income Amount</p>
              </div>
              <div className="flex gap-2">
                <Up />
                <h1>32% from last month</h1>
              </div>
            </div>
          </div>
          {/* <div className="bg-white w-[500px] h-[250px] skeleton">
            <div className="flex items-center py-4 px-4 gap-2">
              <div className="bg-blue-500 w-[10px] h-[10px] rounded-3xl"></div>
              <h1>Total Expenses</h1>
            </div>
            <hr />
            <div>
              <div>
                <h1>-1,200,000₮</h1>
                <p>Your Income Amount</p>
              </div>
              <div className="flex ">
                <Down />
                <h1>32% from last month</h1>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
