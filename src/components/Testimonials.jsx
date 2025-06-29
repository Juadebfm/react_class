import React from "react";
import { testimonialData } from "../mockData/data";

const Testimonials = ({ testimonialHeading, testimonialSubTitle }) => {
  return (
    <section className="min-h-screen mt-[85px]">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-[36px] font-bold leading-6 mb-4">
          {testimonialHeading}
        </h2>
        <p className="font-light text-[19px] w-[40%] text-center">
          {testimonialSubTitle}
        </p>
      </div>

      <div className="grid grid-cols-3 w-[60%] mx-auto mt-14 gap-10">
        {testimonialData.map(({ id, quote, userImg, userName, userJD }) => (
          <div key={id}>
            <img src={userImg} alt={userName} />

            <p>{quote}</p>

            <div>
              <span>{userName}</span> <span>{userJD}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
