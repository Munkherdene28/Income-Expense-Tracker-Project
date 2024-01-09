"use client";
import Header from "../dashboard/Header";
import Income from "../dashboard/Income";
import Chart from "../dashboard/Chart";
import Records from "../dashboard/Records";

export default function dashboard() {
  return (
    <div className="">
      <Header />
      <div className="bg-gray-100 w-screen-full h-screen px-20 py-4 flex flex-col gap-6 items-center">
        <Income />
        <Chart />
        <Records />
      </div>
    </div>
  );
}
