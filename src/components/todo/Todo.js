import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../todo/Todo.css'
import ToDoList from '../ToDoList';
// import { render } from '@testing-library/react';

export default function Todo() {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value)
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        });
        setInputList('');
    };

    const deleteItems = (id) =>{
        console.log('delete');

        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index !== id;
            })
        })
    }

    return (
        <div className="bg">
            <div className="container ">
                <div className="row main_div">
                    <div className=" col-lg-3 col-md-6 col-sm-12 my-5">
                        <div class="card center_div " style={{ width: '20rem' , }}>
                            <div class="card-body ">
                                <br />
                                <h1>ToDo List</h1>
                                <br />
                                <input type="text" placeholder='Add a Items' value={inputList} onChange={itemEvent} />
                                <button className='btn btn1 rounded-circle mx-3' onClick={listOfItems} > + </button>

                                <ol>

                                    {Items.map((itemval, index) => {
                                        // return <li>{itemval}</li> 
                                        return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems} />
                                    })}
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
