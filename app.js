import React from "react";
import ReactDOM from "react-dom/client";


/*
/   <div id="parent">
/           <h1>Nested Example of react</h1>
/   </div>
*/

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
/   <div id="parent">
/       <div id= "child">
/           <h1>Nested Example of react</h1>
/       </div>
/   </div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Nested Example of react")
  )
);

// console.log(parent);
// root.render(parent);

/*
/   <div id="parent">
/       <div id= "child">
/           <h1>H1 tags</h1>
/            <h2>sibling of h1 tags</h1>
/       </div>
/   </div>
*/

const parentsibling = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1-child" }, "H1 tags"),
    React.createElement("h2", { key: "h2-child" }, "sibling of h1 tags"),
  ])
);

// root.render(parentsibling);

/*
/   <div id="parent">
/       <div id= "child">
/           <h1>H1 tags</h1>
/            <h2>sibling of h1 tags</h1>
/       </div>
/       <div id= "child2">
/           <h1>H1 tags</h1>
/            <h2>sibling of h1 tags</h1>
/       </div>
/   </div>
*/

const nestedsilbling = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child", key: "child-1" }, [
      React.createElement("h1", { key: "h1-child1" }, "H1 tags"),
      React.createElement("h2", { key: "h2-child1" }, "sibling of h1 tags"),
    ]),
    React.createElement("div", { id: "child2", key: "child-2" }, [
      React.createElement("h1", { key: "h1-child2" }, "H1 tags"),
      React.createElement("h2", { key: "h2-child2" }, "sibling of h1 tags"),
    ])
  ]
);

root.render(nestedsilbling);
