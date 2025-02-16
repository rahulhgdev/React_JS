import React, { useEffect, useRef, useState } from 'react'
import { FaCalendarCheck } from 'react-icons/fa6';
import TodoItems from './TodoItems';

const Todo = () => {
    const inputRef = useRef();
    const [todoItems, setTodoItems] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    // Add
    const add = () => {
        const inputText = inputRef.current.value.trim();
        if(inputText === ""){
            return null;  
        } 
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoItems((prev)=>[...prev, newTodo]);
        inputRef.current.value = "";
    }
    // Delete
    const deleteToDo = (id) => {
        setTodoItems((prevTodos) => {
           return prevTodos.filter((todo) => todo.id !== id);
        });
    }
    // Toggle
    const toggle = (id) => {
        setTodoItems((prevTodos) => {
            return prevTodos.map((todo)  => {
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

    // Localstorage 
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todoItems));
    }, [todoItems]);

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
            <div className="flex items-center mt-7 gap-2">
                <FaCalendarCheck className='text-2xl me-1' />
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>

            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
            </div>

            <div>
                {todoItems.map((item, index)=>{
                    return <TodoItems text={item.text} key={index} isComplete={item.isComplete} id={item.id} deleteToDo={deleteToDo} toggle={toggle}/>
                })}
            </div>

        </div>
    )
}

export default Todo