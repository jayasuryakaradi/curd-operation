import React from "react";
import "./Button.css";
const Button = ({ buttonName }) => {
  return <button type="submit" className={`${buttonName==="Delete"?"redBg":""}${buttonName==="Edit"?"greenBg":""}`}> {buttonName}</button>;
};

export default Button;
