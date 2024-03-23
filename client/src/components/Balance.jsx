import React from "react";

const Balance = ({ transactions }) => {
  const calculateBalance = () => {
    const amounts = transactions.map((transaction) => transaction.amount);
    return amounts.reduce((total, amount) => total + amount, 0).toFixed(2);
  };

  // Expense Tracker working///////////////////////////////////////

  return (
    <div id="balance-section">
      <h3>Your Balance</h3>
      <h2 id="balance">${calculateBalance()}</h2>
    </div>
  );
};

export default Balance;
