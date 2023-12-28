import Vector from "@/app/SVG/Vector";
export default function LogIn() {
  return (
    <div className="flex">
      <div className="flex-1 h-screen flex items-center justify-center bg-white gap-4">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-center gap-2">
            <Vector />
            <h1 className="text-xl font-bold">Geld</h1>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Welcome Back</h2>
            <p className="text-gray-600">
              Welcome back, please enter your details.
            </p>
          </div>
          <div className="flex flex-col gap-4">
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
            <button className="btn btn-primary w-full">Log in</button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-gray-600">Don’t have an account?</p>
            <button className="text-blue-600">Sign up</button>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-primary"></div>
    </div>
  );
}
