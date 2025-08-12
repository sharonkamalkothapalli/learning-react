import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", {id:"parent"},
//     [React.createElement("div", {id:"child1", key:"child1"},
//         [React.createElement("h1", {key: "h1-1"}, "I am a y !!!! "), React.createElement("h2", {key: "h2-1"}, "I am h2 tag")]
//     ),
//     React.createElement("div", {id:"child2", key:"child2"},
//         [React.createElement("h1", {key: "h1-2"}, "I am h1 tag -----"), React.createElement("h2", {key: "h2-1"}, "I am h2 tag")]
//     )]
// )

// console.log(parent)

const elem = <span>React Element😭 </span>;

// functional component
const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="heading">Namaste React from Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
