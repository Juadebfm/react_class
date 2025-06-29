import React from "react";
import DetailsComponents from "./mini-components/DetailsComponents";
import Button from "./mini-components/Button";
import Heading from "./mini-components/Heading";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-200 flex items-center justify-center">
      <div>
        <DetailsComponents
          title="Make your business powerful with Shade."
          details="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes."
          btnText="Get A Free Quote"
        />

        <Button
          className="bg-red-500 text-black w-20 h-10 rounded-md"
          btnText="Hero Btn"
        />

        <Heading
          className={`font-bold text-4xl capitalize`}
          headingText={`Hero Heading`}
        />
      </div>
    </section>
  );
};

export default Hero;
