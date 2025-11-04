import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/home/Home";
import Jogos from "./pages/jogos/Jogos";
import Videos from "./pages/videos/Videos";
import Perfil from "./pages/perfil/Perfil";
import Perfil2 from "./pages/perfil/Perfil2";
import Perfil3 from "./pages/perfil/Perfil3";
import ChatPv from "./pages/perfil/Chat";
import ChatPv2 from "./pages/perfil/Chat2";
import Pesquisa from "./pages/pesquisa/Pesquisa";
import Config from "./pages/config/Configuracao";
import Times from "./pages/config/Times";
import BuscarPartida from "./pages/config/BuscarPartida";
import Quadra1 from "./pages/quadras/Quadra1";
import Chat3 from "./pages/quadras/Chat3";
import Login from "./pages/login/Login";
import CadastroJogadora from "./pages/login/CadastroJogadora";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirecionamento padrão */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Página de login SEM layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroJogadora />} />
        {/* Todas as páginas com Header/Footer */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/perfil2" element={<Perfil2 />} />
          <Route path="/perfil3" element={<Perfil3 />} />
          <Route path="/chatpv" element={<ChatPv />} />
          <Route path="/chatpv2" element={<ChatPv2 />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="/config" element={<Config />} />
          <Route path="/times" element={<Times />} />
          <Route path="/buscarpartida" element={<BuscarPartida />} />
          <Route path="/quadra1" element={<Quadra1 />} />
          <Route path="/chat3" element={<Chat3 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
