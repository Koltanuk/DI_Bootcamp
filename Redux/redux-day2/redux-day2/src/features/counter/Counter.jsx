import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByNum,
  incrementBy2Nums,
  incrementWithPrepare,
} from "./counterSlice";
import { useRef } from "react";

const Counter = (props) => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  const numRef = useRef();

  const num1Ref = useRef();
  const num2Ref = useRef();

  const numRefOne = useRef();
  const numRefTwo = useRef();

  const addNum = () => {
    const num = numRef.current.value;
    dispatch(incrementByNum(Number(num)));
  };
  const add2Nums = () => {
    const num1 = Number(num1Ref.current.value);
    const num2 = Number(num2Ref.current.value);

    dispatch(incrementBy2Nums({ num1, num2 }));
  };

  const add2NumsWithPrepare = () => {
    const num1 = Number(numRefOne.current.value);
    const num2 = Number(numRefTwo.current.value);
    dispatch(incrementWithPrepare(num1, num2));
  };

  return (
    <div>
      <button onClick={() => dispatch(increment())}> + </button>
      Count: {count}
      <button onClick={() => dispatch(decrement())}> - </button>
      <div>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        <h2>Increment by Number</h2>
        <input ref={numRef} />
        <button onClick={() => addNum()}> Add Number</button>
      </div>
      <div>
        <h2>Increment by Two Numbers</h2>
        <input ref={num1Ref} />
        <input ref={num2Ref} />
        <button onClick={() => add2Nums()}> Add Two Numbers</button>
      </div>
      <div>
        <h2>Increment by Two Numbers with Prepare</h2>
        <input ref={numRefOne} />
        <input ref={numRefTwo} />
        <button onClick={() => add2NumsWithPrepare()}>
          {" "}
          Add Two Numbers With Prepare
        </button>
      </div>
    </div>
  );
};
export default Counter;
