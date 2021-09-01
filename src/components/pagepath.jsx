import React from "react";

const Pagepath = ({ users, linesOnPage, pageNumber, hendlerPageNumber }) => {
  if (users.length <= linesOnPage) return null;
  const pageNumbersView = () => {
    const pageCount = Math.ceil(users.length / linesOnPage);
    let arr = [];
    for (let i = 1; i <= pageCount; i++) {
      arr.push(i);
    }
    return arr;
  };
  return (
    <nav className="m-2" aria-label="...">
      <ul className="pagination">
        {pageNumbersView().map((v) => (
          <li
            key={v}
            onClick={(e) => {
              e.preventDefault();
              hendlerPageNumber(v);
            }}
            className={`page-item ${v === pageNumber ? "active" : ""}`}
            aria-current="page"
          >
            <a className="page-link" href="/">
              {v}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagepath;
