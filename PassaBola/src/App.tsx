import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Jogos from "./pages/jogos/Jogos";
import Videos from "./pages/videos/Videos";
import Perfil3 from "./pages/perfil/Perfil3";
import Perfil2 from "./pages/perfil/Perfil2";
import Perfil from "./pages/perfil/Perfil";
import ChatPv from "./pages/perfil/Chat";
import ChatPv2 from "./pages/perfil/Chat2";
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
        <Route path="/perfil2" element={<Perfil2 />} />
        <Route path="/perfil3" element={<Perfil3 />} />
        <Route path="/chatpv2" element={<ChatPv2 />} />
      </Routes>
    </Router>
  );
}

export default App;
