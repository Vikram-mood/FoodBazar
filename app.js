// let heading=React.createElement("h1",{id:"heading"},"Hello React");

import React from 'react';
import ReactDOM  from 'react-dom/client';
// let heading=React.createElement("div",{id:"grandParent"},
//         React.createElement("div",{id:"parent"},
//         React.createElement("h1",{id:"child"},"Hello im child in side parent")
//         )
// );

// let heading=React.createElement("h1",{id:"heading"},"this is child element");


let JSXheading=()=>(<h1 id="heading">Hello jsx element</h1>);
let x=0;
function hello(){
        if(2+3 !==5){
                x=x+1;
                
        }
        else{
                 x=x+5;
        }
         return <JSXheading />
       
         


        // console.log("Hello world");
}

/////  return 2 components as silbings;

//// javaScript code (i.e functions, variables, statements/ expression) can be called using in jsx using '{}'
let HeadingComponent=()=>{
        
         return (
                <div>
                {hello()}{x}
                 <h1>Hello, this is HeadingComponent</h1>
                </div>
                );
}






let root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent/>);


