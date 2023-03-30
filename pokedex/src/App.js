import "./App.css";
import { Routes, Route } from "react-router-dom";

import PokedexDetail from "./view/PokedexDetail";
import Pokedex from "./view/Pokedex";
import Homepage from "./view/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:number" element={<PokedexDetail />} />
        <Route
          path="*"
          element={
            <p>
              There's nothing here: <span>404!</span>
            </p>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
