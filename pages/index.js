import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "../components/Box";
import { setName, setArray } from "../store/slices/name/nameSlice";
import Box2 from "../components/Box2";

export default function Home() {
  const [word, setWord] = useState({
    firstName: "",
  });

  const { inputText } = useSelector((state) => state.nameReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!word) return;
    dispatch(setName(word.firstName));
    dispatch(setArray(word.firstName));
    setWord({ firstName: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word.firstName}
          onChange={(e) => {
            setWord({ ...word, firstName: e.target.value });
          }}
        />
        <button type="submit">add name</button>
      </form>

      <p>The word is: {inputText} </p>
      <Box />

      <h3>The selected Names are:</h3>
      <Box2 />
    </>
  );
}
