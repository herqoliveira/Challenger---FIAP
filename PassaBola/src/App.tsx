import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Jogos from "./pages/jogos/Jogos";
import Videos from "./pages/videos/Videos";
import Perfil from "./pages/perfil/Perfil";
import ChatPv from "./pages/perfil/Chat";
import Pesquisa from "./pages/pesquisa/Pesquisa";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/chatpv" element={<ChatPv />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
      </Routes>
    </Router>
  );
}

export default App;
