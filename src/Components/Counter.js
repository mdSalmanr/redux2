import classes from './Counter.module.css';
import{useSelector,useDispatch} from "react-redux"

const Counter = () => {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  const IncrementHandler = ()=>{
    dispatch({type:"incrementby5"})

  }
  const DecrementHandler = ()=>{
    dispatch({type:"decrementby5"})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={IncrementHandler} >IncrementBy5</button>
      <button onClick={DecrementHandler}>DecrementBy5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
