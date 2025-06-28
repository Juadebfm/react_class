import React from "react";
import { testimonialData } from "../mockData/data";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      userImg: "/user_t.svg",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
    {
      id: 2,
      userImg: "/user_t.svg",
      quote:
        "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
      userName: "Curtis Rhodes",
      userJD: "Digital Marketer",
    },
    {
      id: 3,
      userImg: "/user_t.svg",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
    {
      id: 4,
      userImg: "/user_t.svg",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
    {
      id: 5,
      userImg: "/user_t.svg",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
    {
      id: 6,
      userImg: "/user_t.svg",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
  ];

  if (testimonialData.length === 0) {
    return (
      <div className="font-bold text-3xl text-red-500 capitalize min-h-[50vh] flex items-center justify-center">
        No data points in the response
      </div>
    );
  }

  if (!testimonialData) {
    <div className="font-bold text-3xl text-red-500 capitalize min-h-[50vh] flex items-center justify-center">
      Data did not come
    </div>;
  }

  return (
    <section className="min-h-screen mt-[85px]">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-[36px] font-bold leading-6 mb-4">
          What people say about us
        </h2>
        <p className="font-light text-[19px] w-[40%] text-center">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
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
