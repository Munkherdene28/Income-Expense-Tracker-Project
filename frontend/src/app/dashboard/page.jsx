import Vector from "@/app/SVG/Vector";
import Plus from "@/app/SVG/Plus";
export default function dashboard() {
  return (
    <div className="flex justify-between items-center gap-4 px-40 py-3">
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
  );
}
