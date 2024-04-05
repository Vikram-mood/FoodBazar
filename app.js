// let heading=React.createElement("h1",{id:"heading"},"Hello React");

import React from 'react';
import ReactDOM  from 'react-dom/client';
let heading=React.createElement("div",{id:"grandParent"},
        React.createElement("div",{id:"parent"},
        React.createElement("h1",{id:"child"},"Hello im child in side parent")
        )
);


let root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


