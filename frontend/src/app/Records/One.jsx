"use client";
import React, { useState } from "react";
import Delete from "../SVG/Delete";
export default function Expense() {
  const [isShow, setIsShow] = useState(false);
  const handleAddButtonClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-primary btn-wide"
          onClick={handleAddButtonClick}
        >
          Add
        </button>
      </div>
      {isShow && (
        <div
          className={`flex justify-center items-center bg-gray-100 h-screen `}
        >
          <div className="flex w-[792px] h-[510px] flex-col items-start bg-base-100 p-4 rounded-lg bg-white gap-3">
            <div className="flex justify-between w-[750px] items-center">
              <h1 className="text-xl font-semibold">Add Record</h1>
              <button onClick={handleAddButtonClick}>
                <Delete />
              </button>
            </div>
            <hr />
            <div className="flex gap-20 justify-center">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="join">
                    <input
                      className="join-item btn w-[160px]"
                      type="radio"
                      name="options"
                      aria-label="Expense"
                    />
                    <input
                      className="join-item btn w-[160px]"
                      type="radio"
                      name="options"
                      aria-label="Income"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Amount ₮ 000,00"
                  className="input input-bordered input-lg flex flex-col"
                />
                <div className="flex flex-col gap-2">
                  <h1>Category</h1>
                  <select className="select select-bordered bg-gray-50">
                    <option>Find or choose category</option>
                    <option>Home</option>
                    <option>Gift</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2 w-full">
                    <h1>Date</h1>
                    <select className="select select-bordered bg-gray-50">
                      <option>Oct 30, 2023</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <h1>Date</h1>
                    <select className="select select-bordered bg-gray-50">
                      <option>4:15 PM</option>
                    </select>
                  </div>
                </div>
                <button className="w-full h-[45px] bg-blue-600 rounded-3xl text-white">
                  Add Record
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <h1>Payee</h1>
                  <select className="select select-bordered bg-gray-50 w-[350px]">
                    <option>Write here</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <h1>Note</h1>
                  <textarea
                    className="textarea textarea-bordered w-[350px] h-[293px]"
                    placeholder="Write here"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
