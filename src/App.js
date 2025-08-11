import React from "react";
import Dictionary from "./components/Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Covenant Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="aesthetic" />
        </main>
        <footer className="mt-5 footer">
          <div className="footer-content">
            <p className="credit">
              Coded by: &nbsp; Fakowajo_DesignTech
              
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
