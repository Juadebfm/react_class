import React from "react";
import DetailsComponents from "./mini-components/DetailsComponents";
import Button from "./mini-components/Button";

const Info = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <DetailsComponents
        title="Experienced experts are giving advices."
        details="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        btnText="Learn how we work"
      />
      <Button
        className="bg-green-500 text-black w-20 h-10 rounded-md"
        btnText="Info Text"
      />
    </section>
  );
};

export default Info;
