import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./cards";
import data from "./data.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>List of stuf</h1>
    {data.map((item) => {
      return (
        <Card sName={item.sName} sLink={item.sLink} imageSrc={item.imageSrc} />
      );
    })}
  </>
);
