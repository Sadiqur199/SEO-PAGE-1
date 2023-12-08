import React from "react";
import Card from "./Card";

const Content = () => {
  return (
     <div className="grid grid-cols-3 gap-4 px-5 mt-5 mb-5">
          <div className="bg-[#F2F4F7] p-5 w-[480px] h-auto">
      <div className="flex justify-between">
        <div className="flex">
          <input
            type=""
            value=""
            className="checkbox rounded-full bg-[#D21010] mr-3"
          />
          <h1>Incomplete</h1>
        </div>
        <div>
          <button className="btn btn-xs w-[5px]">0</button>
        </div>
      </div>
      <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>

    <div className="bg-[#F2F4F7] p-5 w-[480px] h-auto">
      <div className="flex justify-between">
        <div className="flex">
          <input
            type=""
            value=""
            className="checkbox rounded-full bg-[#00B5FF] mr-3"
          />
          <h1>To Do</h1>
        </div>
        <div>
          <button className="btn  btn-xs w-[5px]">0</button>
        </div>
      </div>
      <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>

    <div className="bg-[#F2F4F7] p-5 w-[480px] h-auto">
      <div className="flex justify-between">
        <div className="flex">
          <input
            type=""
            value=""
            className="checkbox rounded-full bg-[#FFE700] mr-3"
          />
          <h1>Doing</h1>
        </div>
        <div>
          <button className="btn btn-xs w-[5px]">0</button>
        </div>
      </div>
      <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>


    
     </div>
  );
};

export default Content;
