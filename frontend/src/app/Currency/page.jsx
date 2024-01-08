"use client";
import Vector from "@/app/SVG/Vector";
import MNT from "@/app/SVG/MNT";
import { useRouter } from "next/navigation";
export default function currency() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center gap-40 pt-10">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-center gap-2">
          <Vector />
          <h1 className="text-3xl font-bold">Geld</h1>
        </div>
        <div className="steps w-[300px]">
          <li className="step step-primary">Currency</li>
          <li className="step">Balance</li>
          <li className="step">Finish</li>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <MNT />
        <p className="text-xl font-bold">Select base currency</p>
        <label className="form-control w-full flex flex-col justify-center items-center">
          <select className="select bg-gray-100 w-full">
            <option>MNT-Mongolian Tugrik</option>
            <option>USD-Dollar</option>
          </select>
        </label>
        <p className="text-[12px]">
          Your base currency should be the one you use most often. All<br></br>
          transaction in other currencies will be calculated based on this one
        </p>
        <button
          className="btn btn-primary w-full"
          onClick={() => router.push("/Balance")}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
