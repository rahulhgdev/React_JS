import React, { createContext, useReducer, useEffect } from 'react';
import supabase from "../supabase-config";

// Initial State
const initialState = {
    transactions: []
}

// creating context
export const GlobalContext = createContext(initialState);

const AppReducer = (state, action) => {
    switch (action.mode) {
        case 'ADD_TRANSACTIONS':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        case 'DELETE_TRANSACTIONS':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            };
            case 'SET_TRANSACTIONS':
                return {
                    ...state,
                    transactions: action.payload
                }
        default:
            return state;
    }
}

// context provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Add a new transaction to Supabase
    const addTransactions = async (transactions) => {
        const { data, error } = await supabase
            .from('khatabook_db')
            .insert([transactions]);
        console.log(data);

        if (error) {
            console.error('Supabase Error:', error);
            return;
        }

        if (data && Array.isArray(data) && data.length > 0) {
            console.log('Refreshed data:', data);
            const { data: refreshedData, error: fetchError } = await supabase
                .from('khatabook_db')
                .select();
        
            if (fetchError) {
                console.error('Error fetching data:', fetchError);
            } else {
                dispatch({
                    mode: 'ADD_TRANSACTIONS',
                    payload: refreshedData
                });
            }
        } else {
            console.error('No data returned after inserting new transaction:', data);
        }
        
    };

    // Delete a transaction from Supabase
    const deleteTransactions = async (id) => {
        const { error } = await supabase
            .from('khatabook_db')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting transaction:', error);
        } else {
            dispatch({
                mode: 'DELETE_TRANSACTIONS',
                payload: id
            });
        }
    };

    // Fetch transactions from Supabase on component mount
    useEffect(() => {
        const fetchTransactions = async () => {
            const { data, error } = await supabase
                .from('khatabook_db')
                .select('*');
            if (error) console.error('Error fetching transactions:', error);
            else dispatch({ mode: 'SET_TRANSACTIONS', payload: data });
        };
        fetchTransactions();
    }, [addTransactions, deleteTransactions]);

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, addTransactions, deleteTransactions }}>
            {children}
        </GlobalContext.Provider>
    );
}
