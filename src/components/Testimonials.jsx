import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [data, setData] = useState([]); // data = []

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data); // data = [Array 100]
      })
      .catch();
  }, []);

  return (
    <div>
      <div>
        {data.slice(0, 4).map(({ id, body, title, userId }) => (
          <div key={id}>
            <h1>{title}</h1>
            <p>{body}</p>
            <small>{userId}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
