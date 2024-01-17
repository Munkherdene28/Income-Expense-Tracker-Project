import Home from "@/Icons/Home";
import Add from "@/Icons/Add";
import Drink from "@/Icons/Drink";
import Food from "@/Icons/Food";
import Gift from "@/Icons/Gift";
import Shopping from "@/Icons/Shopping";
import Taxi from "@/Icons/Taxi";
import { useState } from "react";
export default function drop() {
  const [get, setGet] = useState("");
  return (
    <div className="dropdown">
      <select className="select select-bordered bg-gray-50 w-full"></select>
      <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full overflow-hidden h-[300px] overflow-y-auto">
        <div className="flex flex-col gap-4">
          <button className="flex items-center text-md gap-2 pt-2">
            <Add />
            Add Category
          </button>
          <hr />
          <div
            className="flex flex-col gap-6 items-start cursor-pointer"
            onChange={(e) => setGet(e.target.addEventListener)}
          >
            <p className="flex gap-2 items-center">
              <Home /> Home
            </p>
            <p className="flex gap-2 items-center">
              <Gift /> Gift
            </p>
            <p className="flex gap-2 items-center">
              <Food /> Food
            </p>
            <p className="flex gap-2 items-center">
              <Drink /> Drink
            </p>
            <p className="flex gap-2 items-center">
              <Taxi /> Taxi
            </p>
            <p className="flex gap-2 items-center">
              <Shopping /> Shopping
            </p>
          </div>
        </div>
      </ul>
    </div>
  );
}
