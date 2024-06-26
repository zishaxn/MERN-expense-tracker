import { deleteTransaction } from "../utils/APIRoutes";
  import axios from "axios";
const History = ({ transactions, setTransactions }) => {
  // Expense Tracker working///////////////////////////////////////



  const handleDelete = async (id) => {
    console.log("delet hi nahi hora yar");
    try {
      const response = await axios.delete(deleteTransaction(id));
      console.log(response);
      setTransactions(
        transactions.filter((transaction) => transaction._id !== id)
      );
      console.log(transactions);
    } catch (error) {
      console.error("Error deleting transaction:", error);
      alert("Failed to delete transaction");
    }
  };


  return (
    <div className="history">
      <h2>History</h2>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction._id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.text}{" "}
            <span>
              {transaction.amount < 0 ? "-" : "+"}$
              {Math.abs(transaction.amount)}
            </span>
            <button
              className="delete-btn"
              onClick={() => handleDelete(transaction._id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
