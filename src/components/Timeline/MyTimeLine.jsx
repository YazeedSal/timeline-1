import React from "react";
import MyTimelineItem from "./MyTimelineItem";
import { Timeline } from "@material-ui/lab";

const MyTimeLine = (props) => {
  const { expenses, title,handleGetExpenses } = props;
  return (
    <Timeline align="alternate">
      <h1>{title}</h1>
      {expenses.map((expense, i) => (
        <MyTimelineItem key={i} expense={expense} title={expense.title} handleGetExpenses={handleGetExpenses} />
      ))}
    </Timeline>
  );
};

export default MyTimeLine;
