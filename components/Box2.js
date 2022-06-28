import React from "react";
import { useSelector } from "react-redux";

const Box2 = () => {
  const { selectedNames } = useSelector((state) => state.selectedNameReducer);

  return (
    <div>
      {selectedNames.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Box2;
