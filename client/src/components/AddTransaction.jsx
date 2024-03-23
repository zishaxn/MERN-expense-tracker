import { addTransactions } from "../utils/APIRoutes";
import { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // Expense Tracker working///////////////////////////////////////

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!text || !amount) {
      alert("Please enter a valid text and amount");
      return;
    }
    try {
      const response = await fetch(addTransactions, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          amount: +amount,
        }),
      });
      console.log(response);
      if (response.ok) {
        console.log(response);
        // Assuming you want to reload the transactions after adding a new one
        window.location.reload();
      } else {
        throw new Error("Failed to add transaction");
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("Failed To Add Data");
    }
  };

  return (
    <div className="add-transac">
      <h2>Add New Transaction</h2>
      <form id="form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Detail</label>
          <input
            type="text"
            id="text"
            placeholder="Enter Money Spend/Got"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
