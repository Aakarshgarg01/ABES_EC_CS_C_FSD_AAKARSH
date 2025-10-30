{
  /* <div id="outer">
    <div id="inner1">
        <div id="span-container">
            <span>
                span1;
            </span>
            <span>
                span2;
            </span>
        </div>
    </div>
// </div> */
}
// React.createElement("div", { id: "outer" },
//     React.createElement("div", { id: "inner1" },
//         React.createElement("div", { id: "span-container" },
//             [React.createElement("span", {}, "span1"),
//             React.createElement("span",{},"span2"),
//             ]
//         )
//     )
// )
const span1Content = "span1";
const span2Content = "span2";
const reactElement2 = <div>Header</div>;
console.log(typeof reactElement2);
// const divStyle = {
//     backgroundColor: "lightblue",
//     height: "50px",
//     widthy: "150px"
// }
const reactElement = (
  <div
    id="outer"
    style={{ backgroundColor: "lightblue", height: "50px", width: "150px" }}
  >
    {reactElement2}
    <div id="inner1">
      <div id="span-container">
        <span className="span-1">{span1Content}</span>
        <span className="span-2">{span2Content}</span>
      </div>
    </div>
    <div id="inner2">
      <div id="span-container">
        <span>span3</span>
        <span>span4</span>
      </div>
    </div>
    <div id="inner3">
      <div id="span-container">
        <span>span5</span>
        <span>span6</span>
      </div>
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);