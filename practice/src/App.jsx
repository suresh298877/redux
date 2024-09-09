import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { counterActions } from './store';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  return (
    <>
      <h1>Redux counter</h1>
      {show && <h1>{counter}</h1>}
      <button onClick={() => { dispatch(counterActions.increment()) }}>increment</button>
      <button onClick={() => { dispatch(counterActions.decrement()) }}>decrement</button>
      <button onClick={() => { dispatch(counterActions.increase(10)) }}>increse</button>
      <button onClick={() => { dispatch(counterActions.toggleCounter()) }}>toggle</button>
    </>
  )
}

export default App
