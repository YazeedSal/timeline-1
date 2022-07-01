const Expense = require("../models/expense.model");

const router = require("express").Router();

router.post("/", async function (req, res) {
  const expense = req.body;
  if (!expense) {
    res.status(400).send({ message: "invalid expense inputs" });
  }

  const expenseDb = new Expense(expense);

  try {
    const dbRes = await expenseDb.save();
    res.send(dbRes);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.sendStatus(500);
  }
});

router.get("/", async function (req, res) {
  try {
    const expenses = await Expense.find({});
    res.send(expenses);
  } catch (error) {
    res.statusCode(500);
  }
});

router.delete("/:_id", async function (req, res) {
  const expenseId = req.params._id;
  try {
    await Expense.findByIdAndDelete(expenseId);
    res.send({ message: "expense deleted" });
  } catch (error) {
    res.statusCode(500);
  }
});

module.exports = router;
