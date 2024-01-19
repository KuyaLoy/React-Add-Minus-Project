import React from "react";
import Calculator from "./components/Calculator";

//style
import "./App.scss";
import logo from "./react-logo.png";

const App = () => {
  return (
    <main>
      <div className="TitleContainer">
        <img src={logo} alt="react logo" className="Logo" />
        <h1 className="Title">React Challenge</h1>
        <p className="TitleDescription">a simple React Calculator(adder)</p>
      </div>
      <Calculator />
    </main>
  );
};

export default App;
