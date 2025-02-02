import React, { useState } from "react";
import "./style.css";
import MyTimeLine from "../Timeline/MyTimeLine";

const Body = (props) => {
  const { user,expenses,handleGetExpenses } = props;


  return (
    <div className="body">
     <div id="bodyContainer">

      <MyTimeLine expenses={expenses}  handleGetExpenses={handleGetExpenses} />
      </div>
    </div>
  );
};

export default Body;
