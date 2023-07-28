import React from 'react'
// import './todo/Todo.css'

export default function ToDoList(props) {
 
   
     
  return (
    <>
    <div className="todo_style d-flex">
     
     <button className='btn fa-items rounded-circle  ' onClick={()=>{props.onSelect(props.id)}} > x </button>
        <li>{props.text}</li>
    </div>
    </> 
  )
}
