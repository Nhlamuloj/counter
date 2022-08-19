import logo from './logo.svg';
import './App.css';


import{decrement,increment} from "./actions/index"

import {useSelector,useDispatch} from 'react-redux';
function App() {

  const counter = useSelector((state)=> state.counter)
  const dispatch =useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      <button onClick={()=> dispatch (increment())}>+</button>
      <button  onClick={()=> dispatch (decrement())}>-</button>
      
    </div>
  );
}

export default App;
