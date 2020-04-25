import React from "react";
import "./App.css";
/*
function Helloword(props) {
  console.log("tag", props);
  return (
    <div id="hello">
      {props.subtitle}
      <br></br>
      {props.mytext}
    </div>
  );
}*/
class Helloword extends React.Component {
  state = {
    show: true,
  };
  togleshow() {
    this.setState({ show: !this.state.show });
  }
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          <p>{this.props.mytext}</p>
          <button onClick={() => this.togleshow()}>togle show</button>
        </div>
      );
    } else {
      return (
        <h2>
          nao tem elementos
          <button onClick={() => this.togleshow()}>togle show</button>
        </h2>
      );
    }
  }
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
