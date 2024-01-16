import Vector from "@/app/SVG/Vector";
import Plus from "@/app/SVG/Plus";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Header() {
  const router = useRouter();

  return (
    <div className="flex justify-between px-20 py-4 items-center w-[1440px] mx-auto">
      <div className="flex items-center space-x-5">
        <Vector />
        <button
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            router.push("/dashboard/Records");
          }}
        >
          Records
        </button>
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
