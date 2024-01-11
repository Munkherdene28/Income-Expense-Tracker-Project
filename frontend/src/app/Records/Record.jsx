"use client";
import Header from "../dashboard/Header";
import Plus from "../SVG/Plus";
import Eye from "../SVG/Eye";
import Icon from "../SVG/Icon";
import Blue from "../SVG/Blue";
import Select from "../Records/Select";
import React, { useState } from "react";
export default function record() {
  const [isShow, setIsShow] = useState(false);
  const handleAddButtonClick = () => {
    setIsShow(!isShow);
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
      <div className="bg-gray-100 w-full h-screen flex gap-6">
        <div className="inline-flex items-start gap-6 w-[288px] h-[1020px] bg-white mt-8 ml-[480px] rounded-lg flex-col py-6 px-4">
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
                <p className="rounded-full w-[20px] h-[20px] border"></p>
                <p>All</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="rounded-full w-[20px] h-[20px] border"></p>
                <p>Income</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="rounded-full w-[20px] h-[20px] border"></p>
                <p>Expense</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between w-[250px] items-center">
              <h1 className="text-md font-semibold">Category</h1>
              <button className="text-gray-300">Clear</button>
            </div>
            <div className="flex flex-col gap-4 items-center pl-3 ">
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
            </div>
            <button className="flex items-center gap-3 pl-3 text-sm text-gray-700">
              <Blue /> Add Category
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Amount Range</h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input type="text" className="input input-bordered w-[120px]" />
                <input type="text" className="input input-bordered w-[120px]" />
              </div>
              <div className="flex justify-between flex-col">
                <input type="range" className="range range-xs range-primary" />
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
  );
}
