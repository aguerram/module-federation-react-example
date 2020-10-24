import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header"
import "./index.css";

const App = ()=>{
    return <div>
        <h1>This is the Origin application</h1>
        <Header name={"THis is a dynamic props title, can be changed every where"}/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("app"));
