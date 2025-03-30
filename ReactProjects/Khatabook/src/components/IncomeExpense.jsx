import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStore';

const IncomeExpense = ({ currentMonth, currentYear }) => {
  const { transactions } = useContext(GlobalContext);

  // Filter transactions based on the current month and year
  const filteredTransactions = transactions.filter((item) => {
    const transactionDate = new Date(item.date);
    return transactionDate.getMonth() === currentMonth && transactionDate.getFullYear() === currentYear;
  });

  // Separate income and expense transactions based on the category
  const incomeTransactions = filteredTransactions.filter(transaction => transaction.category === 'Income');
  const expenseTransactions = filteredTransactions.filter(transaction => transaction.category === 'Expense');

  const income = incomeTransactions
    .map(transaction => transaction.amount)
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');

  const expense = expenseTransactions
    .map(transaction => transaction.amount)
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return (
    <div className='flex justify-center w-fit max-w-sm mx-auto row border-lg shadow-md bg-white py-4 px-4 md:px-10 gap-[30px] sm:gap-[35px] md:gap-[40px] mt-4 IncomeExpense'>
      <div className="flex flex-col items-center">
        <h3 className='text-[14px] md:text-[16px]'>INCOME</h3>
        <p className='text-green-600 text-[20px] md:text-[22px] whitespace-nowrap'>₹ {income}</p>
      </div>
      <div className='text-[35px] text-gray-500'>|</div>
      <div className="flex flex-col items-center">
        <h3 className='text-[14px] md:text-[16px]'>EXPENSE</h3>
        <p className='text-red-600 text-[20px] md:text-[22px] whitespace-nowrap'>₹ {expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpense