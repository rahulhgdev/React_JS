import React, {useReducer, useState} from 'react'

const ReducerComponent = () => {

    const initialState = {
        count: 0,
        increment: '+',
        decrement: '-',
        reset: '0'
    }

    const reducer = (state, action) => {
        console.log(state, action);
        switch(action.mode){
            case 'INC': 
                return {
                    ...state,
                    count: state.count + 1};
            case 'DEC':
                return {
                    ...state,
                    count: state.count - 1};
            default:
                return {
                    ...state,
                    count: 0}  
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="p-3 h-lvh flex flex-col justify-center items-center">
            <p>Your count is : {state.count}</p>
            <div className="flex gap-2">
                <button onClick={() => dispatch({mode: 'INC'})}>Increment +</button>
                <button onClick={() => dispatch({mode: 'DEC'})}>Decrement -</button>
                <button onClick={() => dispatch({mode: 'RES'})}>RESET </button>
            </div>
        </div>
    )
}

export default ReducerComponent