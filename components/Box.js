import { useSelector, useDispatch } from "react-redux";
import { deleteFromArray } from "../store/slices/name/nameSlice";
import { setSelectedNameInArray } from "../store/slices/selectedNames/selectedNamesSlice";

const Box = () => {
  const { inputArray } = useSelector((state) => state.nameReducer);
  const dispatch = useDispatch();

  return (
    <>
      <p>The list of names:</p>
      {inputArray.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              dispatch(deleteFromArray(index)), dispatch(setSelectedNameInArray(inputArray[index]));
            }}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </>
  );
};

export default Box;
