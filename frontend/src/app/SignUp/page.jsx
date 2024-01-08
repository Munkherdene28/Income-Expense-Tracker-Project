"use client";
import Vector from "@/app/SVG/Vector";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
const api = "http://localhost:8000/users";

export default function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const keys = { name, email, password };

  const currency = () => {
    router.push("/Currency");
    localStorage.setItem("data", JSON.stringify(keys));
    console.log(keys);
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
              value={name}
              placeholder="Name"
              className="input input-bordered w-full"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="input input-bordered w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Re-password"
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary w-full" onClick={currency}>
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
