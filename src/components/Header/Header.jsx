import React from "react";
import "./style.css";

const Header = (props) => {
  const { user } = props;
  return <div className="header">Header - {user}</div>;
};

export default Header;
