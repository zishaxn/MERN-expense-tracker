import { deleteTransaction } from "../utils/APIRoutes";
const History = ({ transactions, setTransactions }) => {
  // Expense Tracker working///////////////////////////////////////

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await fetch(deleteTransaction(id), {
        method: "DELETE",
      });
      if (response.ok) {
        setTransactions(
          transactions.filter((transaction) => transaction._id !== id)
        );
      } else {
        throw new Error("Failed to delete transaction");
      }
    } catch (error) {
      console.error("Error Deleting Transaction", error);
      alert("Could Not Delete Transactions");
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
