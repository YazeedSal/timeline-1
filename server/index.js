const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path")
require("dotenv").config();
const mongoose = require("mongoose");
const expenseRouter = require("./routes/expense.api");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => {
    console.log(JSON.stringify(error));
  });
if (process.env.ENVIRONMENT == "development") {
  app.use(cors());
}
app.use(express.static(path.join(__dirname,"../build")))

app.use(express.json());
app.use("/expenses", expenseRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Expenses app listening on port ${PORT}!`));
