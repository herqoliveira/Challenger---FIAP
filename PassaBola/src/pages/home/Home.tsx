import { Link } from "react-router-dom";


import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/home.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfilvazio.png";


import site from "../../imgs/selecaobrasileira.png";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white">
            <header className="fixed top-0 w-full shadow-md z-2 bg-[#000000]">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                    <div className="w-12" />
                    <Link to="/pesquisa">
                        <div className="flex-grow max-w-md mx-6">
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-400"
                            />
                        </div>
                    </Link>
                    

                    <img
                        src={logo}
                        alt="Logo"
                        className="h-12 w-12 object-contain"
                    />

                </div>
                <div className="w-full h-0.5 bg-[#ec4d9d]"></div>
            </header>
            <div className="h-15"></div>
            <div className="flex flex-col items-center gap-4 p-4 bg-black min-h-screen w-full">
                <div className="bg-green-700 text-white w-full rounded-lg shadow p-4">
                    <div className="flex justify-between items-center">
                        <span className="font-bold">SAN 0 X 3 SEP</span>
                    </div>
                    <p className="text-xs mt-2">⚽ Aninha 18' | Ruth 45+1' | Beatriz 79'</p>
                    <p className="text-xs">⚽ Marcela 54'</p>
                    <p className="text-yellow-300 text-xs mt-1">⏸️ Intervalo</p>
                </div>

                <a
                    href="https://diariodonordeste.verdesmares.com.br/jogada/brasil-encara-a-espanha-nas-quartas-do-futebol-feminino-nos-jogos-de-paris-saiba-detalhes-1.3542913"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white w-full rounded-lg shadow overflow-hidden"
                >
                    <img
                        src={site}
                        alt="Brasil encara a Espanha nas quartas"
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-3">
                        <p className="text-black text-sm">
                            Brasil encara a Espanha nas quartas do futebol feminino nos Jogos de Paris
                        </p>
                        <span className="text-blue-700 text-xs font-bold">Diário do Nordeste</span>
                    </div>
                </a>
            </div>
            {/*Conteúdo das página */}

            <footer className="fixed bottom-0 w-full bg-[#000000] z-2">
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
                    <Link to="/perfil">
                        <img src={perfil} alt="" className="w-10 h-10" />
                    </Link>
                </div>
            </footer>
        </div>
    );
}
