import React from "react";
import "./App.css";

function Helloword(props) {
  console.log("tag", props);
  return (
    <div id="hello">
      {props.subtitle}
      <br></br>
      {props.mytext}
    </div>
  );
}

function App() {
  return (
    <div>
      <p>
        esse e o meu componete:
        <Helloword mytext="ola novamente" subtitle="eu sou o cara" />
        <Helloword mytext="nossa" subtitle="testando" />
        <Helloword mytext="oi eu sou o goku" subtitle="componete" />
      </p>
    </div>
  );
}

export default App;
