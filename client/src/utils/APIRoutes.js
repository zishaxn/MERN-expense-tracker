// const host = "http://localhost:5500";
const host = "https://mern-expense-tracker-sepia.vercel.app";

export const getTransactions = `${host}/api/v1/transactions`;
export const addTransactions = `${host}/api/v1/transactions`;
export const deleteTransaction = (id) => `${host}/api/v1/transactions/${id}`;
