import React from "react";

import Balance from "./components/Balance";
import ExpCard from "./components/ExpCard";
import TransactionCard from "./components/TransactionCard";
import Transactions from "./components/Transactions";
import { useState } from "react";

export default function App(){
  const[transactions , setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions"))||[])

React.useEffect(()=>{
    localStorage.setItem("transactions", JSON.stringify(transactions))
}, [transactions])

return (
    <div className="full">
      <h1>Expense Tracker</h1>
        <Balance transactions={transactions}/>
        <ExpCard transactions={transactions}/>
        <TransactionCard setTransactions={setTransactions}/>
        <Transactions transactions={transactions} setTransactions={setTransactions}/>
    </div>
)
}