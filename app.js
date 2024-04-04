// let heading=React.createElement("h1",{id:"heading"},"Hello React");

let heading=React.createElement("div",{id:"grandParent"},
        React.createElement("div",{id:"parent"},
        React.createElement("h1",{id:"child"},"Hello im child")
        )
);


let root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


