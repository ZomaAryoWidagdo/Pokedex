import "./App.css";
import { Routes, Route } from "react-router-dom";

import PokedexDetail from "./view/PokedexDetail";
import Pokedex from "./view/Pokedex";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokedex/:pokemon" element={<PokedexDetail />} />
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
    </div>
  );
}

export default App;
