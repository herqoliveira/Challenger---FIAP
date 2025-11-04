import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Jogadora } from "../../data/jogadoras";

import casa from "../../imgs/homevazia.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfil.png";
import chuteira from "../../imgs/chuteira.jpg";

export default function Perfil3() {
  const [jogadora, setJogadora] = useState<Jogadora | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("jogadoraLogada");
    if (data) {
      setJogadora(JSON.parse(data));
    } else {
      // se não houver jogadora logada, redireciona para login
      navigate("/login");
    }
  }, [navigate]);

  if (!jogadora) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0c0c0c]">
        <h3>Carregando perfil...</h3>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white">
      <div className="h-25"></div>

      {/* CABEÇALHO PERFIL */}
      <div className="flex justify-center">
        <div className="flex flex-col py-6 items-center">
          <img
            src={jogadora.foto || perfil}
            alt="Foto de perfil"
            className="w-35 h-35 object-cover rounded-full border-2 border-pink-500"
          />
          <h3 className="text-center font-bold mt-2">{jogadora.nome_usu}</h3>
        </div>

        <div className="flex flex-col px-10 py-10">
          <ol>
            <li>• {jogadora.posicao}</li>
            <li>• {jogadora.idade} anos</li>
            <li>• {jogadora.time || "Sem time favorito"}</li>
          </ol>
          <div className="text-black bg-white mt-5 text-center rounded-lg cursor-pointer">
            Editar perfil
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="h-1 bg-gray-900 w-100 rounded-lg"></div>
      </div>

      {/* POST FIXO (exemplo) */}
      <div className="flex justify-center flex-col items-center gap-4 py-5">
        <div className="gap-10">
          <div className="bg-white w-90 h-80 flex flex-col rounded-lg">
            <div className="flex gap-5 px-4 py-4">
              <img
                src={jogadora.foto || perfil}
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
              <p className="text-black py-1.5 font-bold">{jogadora.nome}</p>
            </div>
            <p className="text-black px-4">
              Olhem minha chuteira nova!! Ganhei da minha patrocinadora (minha mãe 🤣🥰).
            </p>
            <img
              src={chuteira}
              alt="Post"
              className="p-4 w-90 h-50 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-10 lg:hidden"></div>

      {/* FOOTER MOBILE */}
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

      {/* SIDEBAR DESKTOP */}
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
              <p className="mt-2.5 ml-1 font-bold">Perfil</p>
            </div>
          </Link>
        </div>
      </aside>
    </div>
  );
}
