import Vector from "@/app/SVG/Vector";
export default function wait() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-10">
      <div className="flex items-center justify-center gap-2">
        <Vector style={{ width: "50px" }} />
        <h1 className="text-4xl font-bold">Geld</h1>
      </div>
      <div className="flex justify-center items-center flex-col gap-4">
        <span className="loading loading-spinner loading-md text-info"></span>
        <p className="text-md">Түр хүлээнэ үү...</p>
      </div>
    </div>
  );
}
