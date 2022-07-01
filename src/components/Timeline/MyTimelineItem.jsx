import React from "react";
import { Paper } from "@material-ui/core";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import { deleteExpense } from "../../services/ApiManager";
const MyTimelineItem = (props) => {
  const { expense, handleGetExpenses } = props;
  const paperstyle = {
    padding: "8px 1px",
    textAlign: "center",
  };
  const handleDelete = async function () {
    try {
      await deleteExpense(expense._id);
      handleGetExpenses();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} style={paperstyle}>
          {expense.title} - {expense.amount} NIS
          <button onClick={handleDelete}>delete</button>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default MyTimelineItem;
