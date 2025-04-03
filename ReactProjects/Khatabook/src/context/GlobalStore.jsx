import React, { createContext, useReducer, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';  // Import useAuth hook to get current user session
import supabase from "../supabase-config";
import Spinner from '../components/Spinner';

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
            };
        default:
            return state;
    }
}

// context provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const { session } = useAuth();
    const [isLoading, setIsLoading] = useState(true); 

    // Add a new transaction to Supabase
    const addTransactions = async (transactions) => {
        if (!session) {
            console.error('No user is logged in.');
            return;
        }

        const { data, error } = await supabase
            .from('khatabook_db')
            .insert([
                {
                    ...transactions,
                    user_id: session.user.id,  // Add the user_id to the transaction
                }
            ]);

        if (error) {
            console.error('Supabase Error:', error);
            return;
        }

        if (data && Array.isArray(data) && data.length > 0) {
            console.log('Transaction added:', data);
            const { data: refreshedData, error: fetchError } = await supabase
                .from('khatabook_db')
                .select()
                .eq('user_id', session.user.id);  // Filter transactions by the logged-in user
        
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
        if (!session) {
            // console.error('No user is logged in.');
            return;
        }

        const { error } = await supabase
            .from('khatabook_db')
            .delete()
            .eq('id', id)
            .eq('user_id', session.user.id);  // ensure only the user who created the transaction can delete it

        if (error) {
            console.error('Error deleting transaction:', error);
        } else {
            dispatch({
                mode: 'DELETE_TRANSACTIONS',
                payload: id
            });
        }
    };

    // Fetch transactions from Supabase on component mount (for the logged-in user)
    useEffect(() => {
        const fetchTransactions = async () => {
            if (!session) {
                // console.error('No user is logged in.');
                setIsLoading(false);
                return;
            }
            setIsLoading(true);
            const { data, error } = await supabase
                .from('khatabook_db')
                .select('*')
                .eq('user_id', session.user.id);  // Filter transactions by the logged-in user

            if (error) console.error('Error fetching transactions:', error);
            else dispatch({ mode: 'SET_TRANSACTIONS', payload: data });
            setIsLoading(false);
        };

        fetchTransactions();
    }, [session]);  // Trigger the effect when the session changes

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, addTransactions, deleteTransactions }}>
            {isLoading ? <Spinner />: children}
        </GlobalContext.Provider>
    );
}