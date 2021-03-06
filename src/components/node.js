import React from "react";
import "./node.css";

const Node = ({ isStart, isEnd, row, col, isWall, weight }) => {
  const classes = isStart ? "node-start" : isEnd ? "node-end" : "";
  return (
    <div className={`node ${classes}`} id={`node-${col}-${row}`}>
      {" "}
    </div>
  );
};

export default Node;
