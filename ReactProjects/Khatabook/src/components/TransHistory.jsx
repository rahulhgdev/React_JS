import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalStore';
import NoTransactionLogo from '../assets/not-found.svg';
import prevImg from '../assets/prev.svg';
import nextImg from '../assets/next.svg';
import analyzeChart from '../assets/analyze-chart.svg';
import commonTransImg from '../assets/mobile-note.svg';
import deleteImg from '../assets/trash.svg';
import Balance from './Balance'; // Import the Balance component
import IncomeExpense from './IncomeExpense';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const TransHistory = () => {
    const { transactions, deleteTransactions } = useContext(GlobalContext);
    const [dataModal, setDataModal] = useState(false);
    const [individualData, setIndividualData] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [showChartModal, setShowChartModal] = useState(false); // State for chart modal

    // Function to toggle modal for individual transaction
    const toggleDataModal = () => {
        setDataModal(prev => !prev);
    };

    // Function to handle deletion of a transaction
    const handleDelete = (id) => {
        let confirmation = window.confirm("Are you sure, you want to delete this?");
        if (confirmation) {
            deleteTransactions(id);
            setDataModal(false);
        }
    };

    // Function to handle individual transaction details on click
    const handleIndividualData = (singleTransaction) => {
        setIndividualData(singleTransaction);
        setDataModal(true);
    };

    // Filter transactions based on the current month and year
    const filteredTransactions = transactions.filter((item) => {
        const transactionDate = new Date(item.date);
        return transactionDate.getMonth() === currentMonth && transactionDate.getFullYear() === currentYear;
    });

    // Get the month name from the currentMonth index
    const getMonthName = (monthIndex) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months[monthIndex];
    };

    // Function to change to the next month
    const nextMonth = () => {
        if (currentMonth === 11) { // December
            setCurrentMonth(0); // January
            setCurrentYear(prev => prev + 1); // Increment year
        } else {
            setCurrentMonth(prev => prev + 1);
        }
    };

    // Function to change to the previous month
    const prevMonth = () => {
        if (currentMonth === 0) { // January
            setCurrentMonth(11); // December
            setCurrentYear(prev => prev - 1); // Decrement year
        } else {
            setCurrentMonth(prev => prev - 1);
        }
    };

    // Chart
    const calculateIncomeExpenseData = () => {
        let income = 0;
        let expense = 0;

        filteredTransactions.forEach(transaction => {
            if (transaction.category === 'Income') {
                income += transaction.amount;
            } else if (transaction.category === 'Expense') {
                expense += transaction.amount;
            }
        });

        return { income, expense };
    };
    const { income, expense } = calculateIncomeExpenseData();
    // Data for pie chart
    const pieChartData = {
        labels: ['Income', 'Expense'],
        datasets: [
            {
                data: [income, expense],
                backgroundColor: ['#16a34a', '#dc2626'],
                hoverBackgroundColor: ['#16a34a', '#dc2626'],
            },
        ],
    };
    // Options for the pie chart
    const pieChartOptions = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    // Custom tooltip callback to add Rupee symbol to the tooltip
                    label: (tooltipItem) => {
                        return `₹ ${tooltipItem.raw.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`; // Format number with commas
                    }
                }
            }
        }
    };

    return (
        <>
            <div className='mt-6 TransHistory'>
                <div className="flex gap-3 my-3 items-center justify-between">
                    <h3 className='font-semibold text-[22px] pb-2'>Transactions History</h3>
                    {income > 0 || expense > 0 ? 
                        <img onClick={() => setShowChartModal(true)} src={analyzeChart} alt="chart" height="40" width="40" className='cursor-pointer' />: ''
                    }
                </div>
                <hr className='bg-black' />
                <div className='transactions max-h-[350px] overflow-auto'>
                    {/* Month and Year display */}
                    <div className="flex justify-between items-center text-[16px] text-gray-500 my-2">
                        <button onClick={prevMonth} className="text-sm"><img src={prevImg} alt="previous" height="20" width="20" /></button>
                        <div className="text-center font-semibold text-orange-500">{getMonthName(currentMonth)}, {currentYear}</div>
                        <button onClick={nextMonth} className="text-sm"><img src={nextImg} alt="previous" height="20" width="20" /></button>
                    </div>

                    {/* No transactions or Transactions */}
                    {filteredTransactions.length === 0 ? (
                        <div className='flex justify-center my-4 gap-3'>
                            <img src={NoTransactionLogo} height="22" width="22" alt="No Transaction found image" />
                            <p className='text-[16px] font-semibold'>No transactions made yet!</p>
                        </div>
                    ) : (
                        filteredTransactions.map((item, index) => {
                            const isNewDate = index === 0 || new Date(filteredTransactions[index - 1].date).getDate() !== new Date(item.date).getDate();
                            return (
                                <div key={item.id} className="mb-2">
                                    {isNewDate && (
                                        <div className='flex justify-center'>
                                            <code className='text-[14px] font-semibold text-black my-1 border rounded-lg px-4 py-1 mt-3 font-sans bg-[#e9e9e975] text-center w-[80%]'>Date: {item.date}</code>
                                        </div>
                                    )}
                                    <div
                                        onClick={() => handleIndividualData(item)}
                                        className={`flex justify-between cursor-pointer relative mb-2 rounded-md shadow-sm p-1 pr-3 border-r-4 ${item.category === 'Expense' ? 'border-r-red-500' : 'border-r-green-500'} rounded-r-none me-2 singleTrans`}>
                                        <div className='flex gap-2'>
                                            <img alt="" height="20" width="20" src={commonTransImg} />
                                            <p className='text-[16px] font-medium itemTxt'>{item.name}</p>
                                        </div>
                                        <p className='text-[18px] font-medium amount'>₹ {(item.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                                        <p onClick={(e) => {
                                                e.stopPropagation(); // to stop opening modal when click on delete
                                                handleDelete(item.id);
                                            }}
                                            className='delete hidden absolute top-[10px] right-[-20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            {/* Individual Data Modal */}
            <div id="default-modal" tabIndex="-1" aria-hidden="inert" className={`${dataModal ? 'inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative p-4 w-full max-w-[300px] max-h-full">
                    <div className="relative bg-[#0f346f] rounded-lg shadow-sm dark:bg-[#0f346f]">
                        <div className="flex items-center justify-between p-4 md:p-3 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {individualData ? individualData.name : 'Transaction Name'}
                            </h3>
                            <button onClick={toggleDataModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="inert" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <div className="flex gap-3 items-center">
                                <p className="leading-relaxed text-white text-lg font-semibold">
                                    {individualData ? '₹ ' + (individualData.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : '₹ 0.00'}
                                </p>
                                <p className={`text-base leading-relaxed ${individualData?.category === 'Expense' ? 'text-red-500' : 'text-green-500'}`}>
                                    {individualData ? individualData.category : ''}
                                </p>
                            </div>
                            <p className="leading-relaxed text-white text-base mt-2">
                                {individualData ? individualData.description : '!Found'}
                            </p>
                            <button onClick={() => handleDelete(individualData?.id)} className='block my-4 mx-auto w-full text-white bg-red-700 hover:bg-reds-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-reds-800'>Delete <img alt="trash" height="20" width="20" src={deleteImg} className='inline ms-2' /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Pie Chart */}
            {showChartModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-fit md:w-1/1">
                        <h2 className="text-xl font-semibold mb-4">Income & Expense - {getMonthName(currentMonth)}, {currentYear}</h2>
                        <Pie data={pieChartData} options={pieChartOptions} />
                        <button onClick={() => setShowChartModal(false)} type="button" class="" data-modal-hide="default-modal"><svg class="w-3 h-3" aria-hidden="inert" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">Close modal</span></button>
                    </div>
                </div>
            )}

            {/* Balance */}
            <Balance currentMonth={currentMonth} currentYear={currentYear} />
            <IncomeExpense currentMonth={currentMonth} currentYear={currentYear} />
        </>
    );
};

export default TransHistory;