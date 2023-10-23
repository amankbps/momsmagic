
import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
    "h1",
    { id: "heading1",
      style:{color:"green"}
    },
    "this is Heading one"
  );
const heading2 = React.createElement(
    "h1",
    { id: "title",
      className:"hading",
 },
    "this is amamn "
  );
const conatiner = React.createElement(
    "h1",
    { id: "container" },
    [heading1,heading2]
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(conatiner);