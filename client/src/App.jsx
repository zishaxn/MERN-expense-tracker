import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import { getTransactions } from "./utils/APIRoutes";
import "./App.css";

// Expense Tracker working///////////////////////////////////////

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(getTransactions);
        if (response.ok) {
          const data = await response.json();
          
          setTransactions(data);
        } else {
          throw new Error("Failed to fetch transactions");
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
        alert("Failed to fetch transactions");
      }
    };
    fetchTransactions();
  },[]);


  return (
    <div>
      <Header />
      <div className="main-container">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
        <History
          transactions={transactions}
          setTransactions={setTransactions}
        />
        <AddTransaction />
      </div>
    </div>
  );
};

export default App;
