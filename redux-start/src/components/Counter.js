import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggleCounter = useSelector(state => state.toggle);

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };

  const increaseByFiveHandler = () => {
    dispatch({type: 'increase', amount: 5});
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Inc</button>
        <button onClick={increaseByFiveHandler}>Inc by 5</button>
        <button onClick={decrementHandler}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
