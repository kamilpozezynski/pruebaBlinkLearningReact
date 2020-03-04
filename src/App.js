import React from "react";
import "./App.css";
import arrayOfUnorderedElements from "./constants/unordered";
import UnorderedList from "./components/UnorderedList";

function App() {
  return (
    <div>
      <h1>Prueba para blink</h1>
      <div className="grid">
        <div className="listaColores">
          <UnorderedList arrayOfUnorderedElements={arrayOfUnorderedElements} />
        </div>
        <div className="botonChulo">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default App;
