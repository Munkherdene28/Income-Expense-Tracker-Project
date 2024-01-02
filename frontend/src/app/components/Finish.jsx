import Vector from "@/app/SVG/Vector";
import Done from "@/app/SVG/Done";
export default function finish() {
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
        <button className="btn btn-primary w-full">Go to Dashboard</button>
      </div>
    </div>
  );
}
