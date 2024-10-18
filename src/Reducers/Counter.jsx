import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from '../Actions/Action1';

function Counter() {
  const { count } = useSelector((state) => ({ count: state.count }));
  const dispatch = useDispatch();

  return (
    <>
      <p>Count value: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment (+)</button>
      <button onClick={() => dispatch(decrement())}>Decrement (-)</button>
    </>
  );
}

export default Counter;
