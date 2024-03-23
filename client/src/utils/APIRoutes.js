const lhost = "http://localhost:5500";

export const getTransactions = `${lhost}/api/v1/transactions`;
export const addTransactions = `${lhost}/api/v1/transactions`;
export const deleteTransaction = (id) => `${lhost}/api/v1/transactions/${id}`;
