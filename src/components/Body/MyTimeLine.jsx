import React from "react";
import MyTimelineItem from "./MyTimelineItem";
import { Timeline } from "@material-ui/lab";

const MyTimeLine = (props) => {
  const { timeline } = props;

  return (
    <Timeline align="alternate">
      {timeline.map((item) => (
        <MyTimelineItem title={item} />
      ))}
    </Timeline>
  );
};

export default MyTimeLine;
