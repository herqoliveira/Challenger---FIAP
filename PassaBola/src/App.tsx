import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Jogos from "./pages/jogos/Jogos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/jogos" element={<Jogos />} />
      </Routes>
    </Router>
  );
}

export default App;
