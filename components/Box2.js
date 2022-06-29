import React, { useState } from "react";
import { useSelector } from "react-redux";

const Box2 = () => {
  const { selectedNames } = useSelector((state) => state.selectedNameReducer);

  const [food, setFood] = useState("");

  const handleFoodSubmit = (e) => {
    e.preventDefault();
    if (!word) return;
    setFood();
  };

  return (
    <div>
      {selectedNames.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
            <form onSubmit={handleFoodSubmit}>
              <input
                type="text"
                value={food}
                onChange={(e) => {
                  setWord(e.target.value);
                }}
              />
              <button type="submit">add name</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Box2;
