import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import { addExpense } from "../../services/ApiManager";
import "./style.css";

const Header = (props) => {
  const { user, handleGetExpenses } = props;
  const [input, setInput] = useState({ title: "", category: "", amount: "" });

  const handleClick = async function () {
    if (!input.amount) return;

    try {
      await addExpense(input);
      setInput({ title: "", category: "", amount: "" });
      handleGetExpenses();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  const handleInput = function (property, value) {
    const newInput = { ...input };
    newInput[property] = value;
    setInput(newInput);
  };
  return (
    <div className="header">
      Header - {user} <br />
      <Input
        autoFocus
        value={input.title}
        placeholder="title"
        onChange={(event) => handleInput("title", event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <Input
        autoFocus
        value={input.category}
        placeholder="category"
        onChange={(event) => handleInput("category", event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <Input
        autoFocus
        value={input.amount}
        placeholder="amount"
        type="number"
        onChange={(event) => handleInput("amount", event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <Button onClick={handleClick}>click me</Button>
    </div>
  );
};

export default Header;
