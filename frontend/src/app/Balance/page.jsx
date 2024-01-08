"use client";
import Vector from "@/app/SVG/Vector";
import Coin from "@/app/SVG/Coin";
import { useRouter } from "next/navigation";
export default function balance() {
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
          <li className="step step-primary">Balance</li>
          <li className="step">Finish</li>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-[400px]">
        <Coin />
        <p className="text-xl font-bold">Set up your cash Balance</p>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full bg-gray-100"
        />
        <p className="text-[12px] w-full">
          How much cash do you have in your wallet?
        </p>
        <button
          className="btn btn-primary w-full"
          onClick={() => router.push("/Finish")}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
