const Transactions = require("../model/transactions");

// @desc   GET all transactions
// @route  GET /api/v1/transactions
// @access public
module.exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transactions.find();
    if (!transactions) {
      return res.status(404).json({ error: "Could Not Find Transactions" });
    }
    res.json(transactions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc   add a transaction
// @route  POST /api/v1/transactions
// @access public
module.exports.addTransactions = async (req, res, next) => {
  console.log(req.body);
  try {
    const { text, amount } = req.body;
    const newTransaction = new Transactions({
      text,
      amount,
    });
    console.log(newTransaction);

    const addedTransaction = await newTransaction.save();
    return res.status(201).json(addedTransaction);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to add transaction" });
  }
};

// @desc   delete a transaction
// @route  delete /api/v1/transactions/:id
// @access public
module.exports.deleteTransactions = async (req, res, next) => {
  console.log(req.params, "&&", req);
  try {
    const transactionId = req.params.id;
    const transaction = await Transactions.findById(transactionId);
    if (!transaction) {
      return res.status(404).json({ error: "Transaction Does Not Exist" });
    }

    await Transactions.findByIdAndDelete(transactionId);
    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
