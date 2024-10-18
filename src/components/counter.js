import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment,decrement } from './Slice'
import './counter.css'

const Counter = () => {
    const counter=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch()
  return (
    <div>
        <h1>redux counter:{counter}</h1>
        <div className={`box ${counter % 5 === 0 ? 'blue' : 'yellow'}`}>
  color
</div>

        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter