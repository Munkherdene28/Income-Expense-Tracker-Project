"use client";
import Vector from "@/app/SVG/Vector";
import Done from "@/app/SVG/Done";
import { useRouter } from "next/navigation";
import axios from "axios";

const api = "http://localhost:8000/users";

export default function finish() {
  const router = useRouter();
  let data = JSON.parse(localStorage.getItem("data"));
  const handler = async () => {
    let res = await axios.post(api, {
      name: data.name,
      email: data.email,
      password: data.password,
      currency_type: data.currency,
    });
    router.push("/LogIn");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-40 pt-10">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-center gap-2">
          <Vector />
          <h1 className="text-3xl font-bold">Geld</h1>
        </div>
        <div className="steps w-[300px]">
          <li className="step step-primary">Currency</li>
          {/* <li className="step step-primary">Balance</li> */}
          <li className="step step-primary">Finish</li>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-[400px]">
        <Done />
        <p className="text-xl font-bold">Good job</p>
        <p className="text-[14px] w-full text-gray-600 flex justify-center items-center">
          Your very first account has been created. Now<br></br> continue to
          dashboard and start tracking.
        </p>
        <button
          className="btn btn-primary w-full"
          type="button"
          onClick={handler}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
