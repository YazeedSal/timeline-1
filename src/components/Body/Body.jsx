import React, { useState } from "react";
import "./style.css";
import { Button, Input } from "@material-ui/core";
import MyTimeLine from "../Timeline/MyTimeLine";

const Body = (props) => {
  const { user,expenses,handleGetExpenses } = props;


  return (
    <div className="body">
      Body - {user}
      <br />

      <MyTimeLine expenses={expenses} title="my timeline" handleGetExpenses={handleGetExpenses}/>
    </div>
  );
};

export default Body;
