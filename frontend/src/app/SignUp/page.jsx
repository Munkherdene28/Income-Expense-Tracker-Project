"use client";
import Vector from "@/app/SVG/Vector";
import { useRouter } from "next/navigation";
import { useState } from "react";

const api = "http://localhost:8000/users";

export default function signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();

  const handler = async () => {
    const input = {
      name,
      email,
      password,
      currency: "MNT",
    };

    localStorage.setItem("data", JSON.stringify(input));
    router.push("/Currency");
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
            <h2 className="text-2xl font-semibold">Create Geld account</h2>
            <p className="text-gray-600">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="name"
              placeholder="Name"
              className="input input-bordered w-full"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              onChange={(e) => setpassword(e.target.value)}
            />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Re-password"
              className="input input-bordered w-full"
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="btn btn-primary w-full" onClick={handler}>
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-gray-600">Already have account?</p>
            <button
              className="text-blue-600"
              type="button"
              onClick={() => router.push("/LogIn")}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-primary"></div>
    </div>
  );
}
