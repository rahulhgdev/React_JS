import React,  {createContext, useReducer} from 'react';

// Initiail state
const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create context 
export const GlobalContext = createContext(initialState);

const Appreducer = (state, action) => {
    switch (action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => 
                transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, 
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}

// Provider Component
export const GlobalProvider = ({children}) => {
    // Create Reducer
    const [state, dispatch] = useReducer(Appreducer, initialState);

    // Actions
    const deleteTransation = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const addTransaction = (transactions) =>{
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions
        })
    }

    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransation, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}