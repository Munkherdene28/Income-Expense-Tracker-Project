"use client";
import { useRouter } from "next/navigation";
import Vector from "@/app/SVG/Vector";
import { useState } from "react";
import axios from "axios";

const api = "http://localhost:8000/users/LogIn";

export default function LogIn() {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handler = async () => {
    let res = await axios.post(api, { email, password });
    if (res.data === "success") {
      router.push("/dashboard");
    }
  };

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
              onChange={(event) => setemail(event.target.value)}
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setpassword(event.target.value)}
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary w-full" onClick={handler}>
              Log in
            </button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-gray-600">Don’t have an account?</p>
            <button
              className="text-blue-600"
              type="button"
              onClick={() => router.push("/SignUp")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-primary"></div>
    </div>
  );
}
