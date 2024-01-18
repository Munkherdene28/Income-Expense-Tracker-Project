"use client";
import Header from "../Header";
import Plus from "../../SVG/Plus";
import Eye from "../../SVG/Eye";
import Icon from "../../SVG/Icon";
import Delete from "../../SVG/Delete";
import Select from "./Select";
import Dropdown from "./Dropdown";
import Drop from "./Drop";
import React, { useState } from "react";

const api = "http://localhost:8000/category";

export default function record() {
  const [isShow, setIsShow] = useState(false);
  const handleAddButtonClick = () => {
    setIsShow(!isShow);
  };

  const [incomeButtonColor, setIncomeButtonColor] = useState("");
  const [expenseButtonColor, setExpenseButtonColor] = useState("");
  const handleIncomeButtonClick = () => {
    setIncomeButtonColor("#16A34A");
    setExpenseButtonColor("");
  };
  const handleExpenseButtonClick = () => {
    setExpenseButtonColor("#0166FF");
    setIncomeButtonColor("");
  };

  const Category = [
    {
      eye: <Eye />,
      text: "Food & Drinks",
      icon: <Icon />,
    },
    {
      eye: <Eye />,
      text: "Shopping",
      icon: <Icon />,
    },
    {
      eye: <Eye />,
      text: "Housing",
      icon: <Icon />,
    },
    {
      eye: <Eye />,
      text: "Transportation",
      icon: <Icon />,
    },
    {
      eye: <Eye />,
      text: "Vehicle",
      icon: <Icon />,
    },
    {
      eye: <Eye />,
      text: "Life & Entertainment",
      icon: <Icon />,
    },
    {
      eye: <Eye />,
      text: "Communication, PC",
      icon: <Icon />,
    },
    {
      eye: <Eye />,
      text: "Financial expenses",
      icon: <Icon />,
    },
    {
      eye: <Eye />,
      text: "Investments",
      icon: <Icon />,
    },
    {
      eye: <Eye />,
      text: "Income",
      icon: <Icon />,
    },
    {
      eye: <Eye />,
      text: "Others",
      icon: <Icon />,
    },
  ];

  return (
    <div>
      <Header />
      <div className="bg-gray-100 w-full pt-[35px] h-screen">
        <div className="px-[480px] inline-flex gap-6 justify-center items-center">
          <div className="inline-flex items-start gap-6 w-[288px] h-[1020px] bg-white rounded-lg flex-col py-6 px-4">
            <div className="flex flex-col gap-6">
              <h1 className="text-xl font-semibold">Records</h1>
              <button
                className="btn btn-primary btn-wide"
                onClick={handleAddButtonClick}
              >
                <Plus /> Add
              </button>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-sm w-full max-w-xs"
            />
            <div className="flex flex-col gap-3">
              <div>
                <button className="text-md font-semibold">Types</button>
              </div>
              <div className="pl-3 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox rounded-full w-[20px] h-[20px]"
                  />
                  <p>All</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox rounded-full w-[20px] h-[20px]"
                  />
                  <p>Income</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox rounded-full w-[20px] h-[20px]"
                  />
                  <p>Expense</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between w-[250px] items-center">
                <h1 className="text-md font-semibold">Category</h1>
                <button className="text-gray-300">Clear</button>
              </div>
              {/* <div className="flex flex-col gap-4 items-center pl-3 ">
                {Category.map((data, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center w-[250px]"
                  >
                    <div className="flex items-center gap-2">
                      {data.eye}
                      <h1 className="text-sm text-gray-700"> {data.text}</h1>
                    </div>
                    <div>{data.icon}</div>
                  </div>
                ))}
              </div> */}
              <Drop />
            </div>
            <div className="flex flex-col gap-4">
              <h1>Amount Range</h1>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    className="input input-bordered w-[120px]"
                  />
                  <input
                    type="text"
                    className="input input-bordered w-[120px]"
                  />
                </div>
                <div className="flex justify-between flex-col">
                  <input
                    type="range"
                    className="range range-xs range-primary"
                  />
                  <div className="flex justify-between w-[250px]">
                    <span>0</span>
                    <span>1000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Select />
        </div>
      </div>
      {isShow && (
        <div
          className={`flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50`}
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
                      onClick={handleExpenseButtonClick}
                      style={{ backgroundColor: expenseButtonColor }}
                    />
                    <input
                      className="join-item btn w-[160px]"
                      type="radio"
                      name="options"
                      aria-label="Income"
                      onClick={handleIncomeButtonClick}
                      style={{ backgroundColor: incomeButtonColor }}
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
                  <Dropdown />
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
                <button
                  className="w-full h-[45px] bg-blue-600 rounded-3xl text-white"
                  style={{
                    backgroundColor: incomeButtonColor,
                  }}
                  onClick={handleAddButtonClick}
                >
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
