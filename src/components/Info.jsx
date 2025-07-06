import React from "react";
import { useData } from "../context/DataContext";
import Button from "./mini-component/Button";

const Info = () => {
  const data = useData();
  const stats = data.stats;
  console.log(stats);
  return (
    <div className="min-h-screen grid grid-cols-3 items-center justify-center bg-slate-100">
      <div>
        <div>
          <h1 className="font-bold text-5xl leading-[58px]">
            Make your business powerful with Shade.
          </h1>
          <p className="mt-4">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
          <Button
            btnText={`Learn how we work`}
            className="w-[200px] h-[59px] mt-8"
          />

          <span className="text-sm font-bold block mt-7">
            Watch how we can help
          </span>
        </div>
      </div>

      <div>
        <img src="" alt="" />
      </div>

      <div>
        <div>
          <h3>{stats.customers}</h3>
          <p>{stats.customerText}</p>
        </div>
        <div>
          <h3>{stats.satisfaction}</h3>
          <p>{stats.satisfactionText}</p>
        </div>
        <div>
          <h3>{stats.rating}</h3>
          <p>{stats.ratingText}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
