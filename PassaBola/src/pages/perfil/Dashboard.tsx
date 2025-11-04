import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Jogadora } from "../../data/jogadoras";
import casa from "../../imgs/homevazia.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfil.png";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [jogadora, setJogadora] = useState<Jogadora | null>(null);
  const [partidas, setPartidas] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("jogadoraLogada");
    if (data) {
      setJogadora(JSON.parse(data));
    } else {
      navigate("/login");
    }

    const partidasSalvas = localStorage.getItem("partidasJogadas");
    if (partidasSalvas) {
      setPartidas(JSON.parse(partidasSalvas));
    } else {
      setPartidas([0]); // começa com 0 partidas
    }
  }, [navigate]);

  const adicionarPartida = () => {
    const novasPartidas = [...partidas, partidas[partidas.length - 1] + 1];
    setPartidas(novasPartidas);
    localStorage.setItem("partidasJogadas", JSON.stringify(novasPartidas));
  };

  const data = partidas.map((valor, index) => ({
    dia: `Jogo ${index + 1}`,
    partidas: valor,
  }));

  return (
    <div>
      <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col items-center">
        <div className="h-24"></div>

        <div className="bg-black p-6 rounded-2xl shadow-lg w-11/12 max-w-2xl text-center">
          {jogadora && (
            <div className="flex flex-col items-center mb-4">
              <img
                src={jogadora.foto || perfil}
                alt="Foto da jogadora"
                className="w-20 h-20 rounded-full border-2 border-[#ec4d9d]"
              />
              <h2 className="text-2xl font-semibold mt-2">{jogadora.nome}</h2>
              <p className="text-pink-400">{jogadora.posicao} - {jogadora.time}</p>
            </div>
          )}

          <div className="bg-[#1a1a1a] rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Progresso de Partidas</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="dia" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#222", borderRadius: "8px" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Bar dataKey="partidas" fill="#ec4d9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <button
            onClick={adicionarPartida}
            className="mt-6 bg-[#ec4d9d] hover:bg-pink-600 transition-all px-6 py-2 rounded-lg text-white font-medium"
          >
            + Partida
          </button>
        </div>
        <div className="h-15 lg:hidden"></div>
      </div>
      <div>
        <footer className="fixed bottom-0 w-full bg-[#000000] z-2 lg:hidden">
          <div className="w-full h-0.5 bg-[#ec4d9d]"></div>
          <div className="flex gap-20 justify-center">
            <Link to="/home">
              <img src={casa} alt="" className="w-10 h-10" />
            </Link>
            <Link to="/videos">
              <img src={video} alt="" className="w-10 h-10" />
            </Link>
            <Link to="/jogos">
              <img src={bola} alt="Perfil" className="w-10 h-10" />
            </Link>
            <Link to="/perfil3">
              <img src={perfil} alt="" className="w-10 h-10" />
            </Link>
          </div>
        </footer>
        <aside className="hidden lg:flex fixed top-0 left-0 z-1 w-36 h-screen bg-black flex-col items-center py-4">
          <div className="mt-40">
            <Link to="/home">
              <div className="flex items-center">
                <img src={casa} alt="Home" className="w-10 h-10 mb-6" />
                <p className="mt-2.5 ml-1">Home</p>
              </div>
            </Link>
            <Link to="/videos">
              <div className="flex items-center">
                <img src={video} alt="Vídeos" className="w-10 h-10 mb-6" />
                <p className="mt-2.5 ml-1">Vídeos</p>
              </div>
            </Link>
            <Link to="/jogos">
              <div className="flex items-center">
                <img src={bola} alt="Jogos" className="w-10 h-10 mb-6" />
                <p className="mt-2.5 ml-1">Jogos</p>
              </div>
            </Link>
            <Link to="/perfil3">
              <div className="flex items-center">
                <img src={perfil} alt="Perfil" className="w-10 h-10" />
                <p className="mt-2.5 ml-1">Perfil</p>
              </div>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
