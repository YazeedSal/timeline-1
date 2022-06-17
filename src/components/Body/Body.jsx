import React, { useState } from "react";
import "./style.css";
import { Button, Input } from "@material-ui/core";
import MyTimeLine from "./MyTimeLine";

const Body = (props) => {
  const { user } = props;
  const [timeline, setTimeline] = useState([]);
  const [input, setInput] = useState("");
  const handleClick = function () {
    const newTimeLine = [...timeline, input];
    setTimeline(newTimeLine)
    setInput('')
  };

  return (
    <div className="body">
      Body - {user}
      <br/>
      <Input
        autoFocus
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <Button onClick={handleClick}>click me</Button>
      <MyTimeLine timeline={timeline} />
    </div>
  );
};

export default Body;
