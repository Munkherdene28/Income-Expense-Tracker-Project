import Vector from "@/app/SVG/Vector";
export default function signup() {
  return (
    <div className="flex">
      <div className="flex-1 h-screen flex items-center justify-center bg-white gap-4">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-center gap-2">
            <Vector />
            <h1 className="text-xl font-bold">Geld</h1>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Create Geld account</h2>
            <p className="text-gray-600">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="Re-password"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary w-full">Sign Up</button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-gray-600">Already have account?</p>
            <button className="text-blue-600">Log In</button>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-primary"></div>
    </div>
  );
}
