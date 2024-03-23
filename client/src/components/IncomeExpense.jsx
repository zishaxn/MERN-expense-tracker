import React from "react";

const IncomeExpense = ({ transactions }) => {
  const calculateIncome = () => {
    const income = transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((total, transaction) => total + transaction.amount, 0);
    return income.toFixed(2);
  };

  const calculateExpense = () => {
    const expense = transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((total, transaction) => total + transaction.amount, 0);
    return Math.abs(expense).toFixed(2);
  };

  // Expense Tracker working///////////////////////////////////////

  return (
    <div className="income-expense">
      <span>
        <h3>Income </h3>
        <h4 id="income" className="income">
          ${calculateIncome()}
        </h4>
      </span>
      <div id="border"></div>
      <span>
        <h3>Expense </h3>
        <h4 id="expense" className="expense">
          ${calculateExpense()}
        </h4>
      </span>
    </div>
  );
};

export default IncomeExpense;
