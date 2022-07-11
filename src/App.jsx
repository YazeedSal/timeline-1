import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { getExpenses } from "./services/ApiManager";
import "bootstrap/dist/css/bootstrap.min.css"
import {} from "react-bootstrap"

function ExpensesApp() {
  const [expenses, setExpenses] = useState([]);

  const handleGetExpenses = async function () {
    try {
      const expensesDb = await getExpenses();
      setExpenses(expensesDb);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  useEffect(() => {
    handleGetExpenses();
  }, []);
  return (
    <div className="expensesApp">
      <Header handleGetExpenses={handleGetExpenses} />
      <Body
        expenses={expenses}
        handleGetExpenses={handleGetExpenses}
      />
    </div>
  );
}

export default ExpensesApp;
