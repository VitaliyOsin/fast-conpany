import React, { useEffect, useState } from "react";
import api from "./api";
import CountOfLines from "./components/count-of-lines/count-of-lines";
import Pagepath from "./components/pagepath";
import Users from "./components/users";

const App = () => {
  const initialState = api.users.fetchAll().map((v) => {
    return { ...v, booked: false };
  });
  const [users, setUsers] = useState(initialState);
  const [pageNumber, setPageNumber] = useState(1);
  const [linesOnPage, setLinesOnPage] = useState(4);

  const usersOnPage = users.slice(
    (pageNumber - 1) * linesOnPage,
    (pageNumber - 1) * linesOnPage + linesOnPage
  );

  useEffect(() => {
    if (usersOnPage.length === 0 && pageNumber !== 1) {
      hendlerPageNumber(pageNumber - 1);
    }
  }, [usersOnPage, pageNumber]);

  const hendleDelete = (userId) => {
    setUsers(users.filter((v) => v._id !== userId));
  };
  const hendleReset = () => {
    setUsers(initialState);
  };
  const bookedHendler = (userId) => {
    const newUsers = users.map((user) => {
      if (user._id === userId) {
        user.booked = !user.booked;
      }
      return user;
    });

    setUsers(newUsers);
  };
  const hendlerPageNumber = (n) => {
    setPageNumber(n);
  };

  return (
    <>
      <Users
        users={users}
        usersOnPage={usersOnPage}
        hendleDelete={hendleDelete}
        hendleReset={hendleReset}
        bookedHendler={bookedHendler}
      />
      {users.length > 0 ? (
        <>
          <Pagepath
            users={users}
            usersOnPage={usersOnPage}
            linesOnPage={linesOnPage}
            pageNumber={pageNumber}
            hendlerPageNumber={hendlerPageNumber}
          />
          <CountOfLines
            linesOnPage={linesOnPage}
            setLinesOnPage={setLinesOnPage}
            setPageNumber={setPageNumber}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
