import React from "react";
import { Button, Input, Paper } from "@material-ui/core";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
const MyTimelineItem = (props) => {
  const { title } = props;
  const paperstyle = {
    padding: "8px 1px",
    textAlign: "center",
  };
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} style={paperstyle}>
          {title}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default MyTimelineItem;
