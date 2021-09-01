import React from "react";
import "./count-of-lines.css";

const CountOfLines = ({ linesOnPage, setLinesOnPage, setPageNumber }) => {
  return (
    <div className="count-of-lines-div">
      <span>Персонажей на одной странице: </span>
      {[1, 2, 3, 4, 5, 12].map((n) => (
        <span
          key={n}
          className={`count-of-lines-span-page ${
            n === linesOnPage ? "set" : ""
          }`}
          onClick={() => {
            if (n !== linesOnPage) {
              setLinesOnPage(n);
              setPageNumber(1);
            }
          }}
        >
          {n}{" "}
        </span>
      ))}
    </div>
  );
};

export default CountOfLines;
