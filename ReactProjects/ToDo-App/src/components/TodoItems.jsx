import React from 'react'
import { FaCircleCheck, FaTrashCan, FaRegCircle } from 'react-icons/fa6';
const TodoItems = ({ text, id, isComplete, deleteToDo, toggle }) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div onClick={() => toggle(id)} className="flex flex-1 items-center cursor-pointer">
                {isComplete ? <FaCircleCheck className='text-orange-500 text-2xl' /> : <FaRegCircle className='text-2xl' />}

                <p className={`text-slate-700 ml-4 text-[17px] slate-decoration-500 ${isComplete ? 'line-through' : ''} `}>{text}</p>
            </div>
            <FaTrashCan onClick={() => deleteToDo(id)} className='text-1xl cursor-pointern' />
        </div>
    )
}

export default TodoItems