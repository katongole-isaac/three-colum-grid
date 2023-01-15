import React from "react";
import "./app.css";
import CardList from "./components/cardList";

export default function () {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <CardList />
        </div>
      </div>
    </>
  );
}
