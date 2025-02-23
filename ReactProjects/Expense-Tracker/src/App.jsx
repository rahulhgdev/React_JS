import { useState } from 'react'
import Balance from './component/Balance'
import IncomeExpense from './component/IncomeExpense'
import TransactionHistory from './component/TransactionHistory'
import AddTransaction from './component/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
