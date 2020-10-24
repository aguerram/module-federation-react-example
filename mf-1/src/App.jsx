import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
const Header = React.lazy(() => import("app2/Header"));

const App = () => {
  return (
    <div>
      <React.Suspense fallback="Loading Counter...">
        <h4>This is the other website that uses a component from other source</h4>
        <Header 
        style={{
            border:"2px solid red",
            padding:20
        }} 
        name="This title prop changed from the slave" />
      </React.Suspense>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
