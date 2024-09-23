import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './ToDo'
import { useCallback } from 'react'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const add = () => {
    setCount((count)=> count+1);
  }

  
  const addTodo =useCallback(() => {
    console.log('addTodo');
  },[count])

  const heavyCalculation = () =>{
    let num = 0;
    for (let index = 0; index < 1000000; index++) {
      num++;
      
    }
    return num;
  }

  const result = useMemo(()=>{
    const result = heavyCalculation();
    return result;
  },[count])


  return (
    <>
      <div>
        <h2>memo, useMemo, useCallback</h2>
        <h3>count is {count}</h3>
        <button onClick ={()=>add()}>Add</button>
        <Todo todos={todos} addTodo={addTodo}/>
      </div> 
    </>
  )
}

export default App
