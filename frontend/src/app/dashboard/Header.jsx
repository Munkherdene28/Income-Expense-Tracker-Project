import Vector from "@/app/SVG/Vector";
import Plus from "@/app/SVG/Plus";
export default function header() {
  return (
    <div className="flex justify-between px-20 py-4 items-center w-[1440px] mx-auto">
      <div className="flex items-center space-x-5">
        <Vector />
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p>Records</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="btn btn-primary btn-sm">
          <Plus /> Record
        </button>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
