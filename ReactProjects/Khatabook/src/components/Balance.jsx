import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalStore';

const Balance = ({ currentMonth, currentYear }) => {
    const { transactions } = useContext(GlobalContext);

    // Filter transactions based on the current month and year
    const filteredTransactions = transactions.filter((item) => {
        const transactionDate = new Date(item.date);
        return transactionDate.getMonth() === currentMonth && transactionDate.getFullYear() === currentYear;
    });

    // Calculate the total balance for the selected month
    const amount = filteredTransactions.map((item) => item.amount);
    let totalBalance = amount.reduce((acc, item) => (acc += item), 0);
    
    // Formating
    totalBalance = totalBalance.toFixed(2); // Two decimals
    totalBalance = totalBalance.replace(/\d(?=(\d{3})+\.)/g, '$&,');

    return (
        <div className='flex flex-row gap-3 items-center justify-center mt-4 Balance'>
            <h5 className='text-[14px] md:text-[16px] uppercase'>Your Total Expense : </h5>
            <div className="font-bold text-[18px] md:text-[24px]">₹ {totalBalance}</div>
        </div>
    );
}

export default Balance;
