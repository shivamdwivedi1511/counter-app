import { useState } from "react";
import "./App.scss";
import { Card, Header } from "./components";
import DarkMode from "./components/DarkMode";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="app">
      <Header />
      <DarkMode setDarkMode={setDarkMode} />
      <div className="container">
        <Card />
      </div>
    </div>
  );
}

export default App;
