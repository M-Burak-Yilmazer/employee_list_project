import React, { useState } from "react";
import List from "./components/List";
import data from "../src/helper/data";

function App() {
  let len = data.length;
  console.log(len);
  const [number, setNumber] = useState(5);

  const handlePrev = () => {
    number > 6 && setNumber(number - 5);
    number === 5 && setNumber(20);
  };
  const handleNext = () => {
    number < 20 && setNumber(number + 5);
    number === 20 && setNumber(5);
  };

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {number - 4} to {number})
        </h5>
        <List listValue={number} />
        <div className="btns">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
