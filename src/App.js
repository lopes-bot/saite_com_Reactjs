import React from "react";
import "./App.css";

function Helloword() {
  return <div id="hello">Hello Word!</div>;
}

function App() {
  return (
    <div>
      <p>
        esse e o meu componete:
        <Helloword />
      </p>
    </div>
  );
}

export default App;
