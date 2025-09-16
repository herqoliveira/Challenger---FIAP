import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/home.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfilvazio.png";
import lupa from "../../imgs/lupa.png";
import voltar from "../../imgs/voltar.png";
import Mapa from "../../components/mapa"; 



interface CardPartidaProps {
  dia: string;
  titulo: string;
  vagas: string;
  local: string;
  horario: string;
  detalhes: string[];
}


const localizacoes = {
  "Arena Passa Bola": { lat: -23.585778, lng: -46.651597 }, 
  "Praça Boa Vista": { lat: -23.55444, lng: -46.639999 }, 
  "Campo da Igreja Central": { lat: -23.55888, lng: -46.64555 }, 
};

function CardPartida({ dia, titulo, vagas, local, horario, detalhes }: CardPartidaProps) {
  const [mostrarMais, setMostrarMais] = useState(false);


  const coordenadas = localizacoes[local as keyof typeof localizacoes] || { lat: 0, lng: 0 };

  return (
    <div className="flex flex-col w-90 bg-green-600 mt-3 rounded-lg p-3">
      <p className="text-3xl text-center">{dia}</p>

      <div className="bg-green-700 w-full rounded-lg p-3 mt-2">
        <ol className="space-y-1">
          <li>⚽ {titulo}</li>
          <li>👤 {vagas}</li>
          <li>📍 {local}</li>
          <li>🕝 {horario}</li>
          <li
            className="text-blue-200 cursor-pointer"
            onClick={() => setMostrarMais(!mostrarMais)}
          >
            {mostrarMais ? "ver menos" : "saiba mais"}
          </li>
        </ol>
      </div>

      {mostrarMais && (
        <div className="bg-green-800 w-full rounded-lg p-3 mt-2 text-sm">
          <div className="mb-4">
            <Mapa center={coordenadas} />
          </div>
          
          <ul className="list-disc pl-5 space-y-1">
            {detalhes.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Link to="/quadra1">
            <button className="mt-2 bg-green-500 text-black font-bold py-1 px-3 rounded">
              PARTICIPAR
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default function BuscarPartida() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white">
      <header className="fixed top-0 w-full shadow-md z-2 bg-[#000000]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/config">
            <img
              src={voltar}
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
          </Link>
          <div className="flex-grow max-w-md mx-6">
            <Link to="/pesquisa">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-400"
              />
            </Link>
          </div>
          <Link to="/config">
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
          </Link>
        </div>
        <div className="w-full h-0.5 bg-[#ec4d9d]"></div>
      </header>
      <div className="h-20"></div>

      <div className="flex justify-center">
        <div className="bg-black w-100 p-4 rounded-lg">
          <Link to="/buscarpartida">
            <div className="flex mt-1">
              <img src={lupa} alt="" className="w-8 h-8" />
              <p className="py-1.5 ml-3">Buscar partidas</p>
            </div>
          </Link>

          <div className="bg-[#0c0c0c] h-0.5 w-90 rounded-lg my-3"></div>

          <CardPartida
            dia="Dia 14/06"
            titulo="Time de Fut7"
            vagas="3 vagas para times (completos)"
            local="Arena Passa Bola"
            horario="17h30 até 20h30"
            detalhes={[
              "Torneio pago - R$12,50",
              "Idade mínima: 15 anos",
              "Idade máxima: 20 anos",
              "Não é campeonato",
              "15 minutos de tolerância",
              "Uso obrigatório de caneleira",
            ]}
          />

          <CardPartida
            dia="Dia 15/06"
            titulo="Time de Futsal"
            vagas="2 vagas para times"
            local="Praça Boa Vista"
            horario="13h"
            detalhes={[
              "Entrada gratuita",
              "Times de até 7 jogadores",
              "Quadra descoberta",
              "Regras oficiais de futsal",
            ]}
          />

          <CardPartida
            dia="Dia 16/06"
            titulo="Time de Campo"
            vagas="2 vagas"
            local="Campo da Igreja Central"
            horario="12h"
            detalhes={[
              "Entrada gratuita",
              "Times mistos permitidos",
              "Arbitragem local",
            ]}
          />
          <h3 className="text-center py-1">Carregando...</h3>
        </div>
      </div>

      <div className="h-10 lg:hidden"></div>
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
      <aside className="fixed z-1 w-35 h-full bg-black flex-col items-center py-4 hidden lg:flex">
        <div className="mt-40">
          <Link to="/home">
            <div className="flex">
              <img src={casa} alt="Home" className="w-10 h-10 mb-6" />
              <p className="mt-2.5 ml-1">Home</p>
            </div>
          </Link>
          <Link to="/videos">
            <div className="flex">
              <img src={video} alt="Vídeos" className="w-10 h-10 mb-6" />
              <p className="mt-2.5 ml-1">Vídeos</p>
            </div>
          </Link>
          <Link to="/jogos">
            <div className="flex">
              <img src={bola} alt="Jogos" className="w-10 h-10 mb-6" />
              <p className="mt-2.5 ml-1">Jogos</p>
            </div>
          </Link>
          <Link to="/perfil3">
            <div className="flex">
              <img src={perfil} alt="Perfil" className="w-10 h-10" />
              <p className="mt-2.5 ml-1">Perfil</p>
            </div>
          </Link>
        </div>
      </aside>
    </div>
  );
}