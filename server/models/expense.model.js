const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  title: String,
  amount: Number,
  category: String,
});

const Expense = mongoose.model("expense", ExpenseSchema);

module.exports = Expense;
