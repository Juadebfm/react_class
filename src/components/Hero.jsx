import React from "react";
import Button from "./mini-component/Button";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "hero_pattern.svg" }}
      className="min-h-screen px-[213px] grid grid-cols-2 items-center gap-[150px] mt-12"
    >
      <div>
        <h1 className="font-bold text-5xl leading-[58px]">
          Make your business powerful with Shade.
        </h1>
        <p className="mt-4">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </p>
        <Button
          btnText={`Get A Free Quote`}
          className="w-[200px] h-[59px] mt-8"
        />

        <span className="text-sm font-bold block mt-7">
          Watch how we can help
        </span>
      </div>

      <div>
        <img src="/hero_img.svg" alt="Hero img" />
      </div>
    </section>
  );
};

export default Hero;
