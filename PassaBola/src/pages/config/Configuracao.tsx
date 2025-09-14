import { Link } from "react-router-dom";
import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/home.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfilvazio.png";

/* Ícones do conteúda da página*/
import time from "../../imgs/team.png";
import config from "../../imgs/config.png";
import lupa from "../../imgs/lupa.png";
import quadra from "../../imgs/quadra.png";
import loja from "../../imgs/loja.png";

export default function Config() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white">
            <header className="fixed top-0 w-full shadow-md z-2 bg-[#000000]">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                    <div className="w-12" />

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
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-12 w-12 object-contain"
                        />
                    </Link>

                </div>
                <div className="w-full h-0.5 bg-[#ec4d9d]"></div>
            </header>
            <div className="h-20"></div>


            <div className="flex justify-center">
                <div className="bg-black w-100 h-125 p-4 rounded-lg">
                    <Link to="/times">
                        <div className="flex mt-1">
                            <img src={time} alt="" className="w-8 h-8" />
                            <p className="py-1.5 ml-3">Meus times</p>
                        </div>
                    </Link>

                    <div className="bg-[#0c0c0c] h-0.5 w-90 roundde-lg"></div>

                    <div className="flex mt-1">
                        <img src={config} alt="" className="w-8 h-8" />
                        <p className="py-1.5 ml-3">Configurações</p>
                    </div>

                    <div className="bg-[#0c0c0c] h-0.5 w-90 roundde-lg"></div>
                    <Link to="/buscarpartida">
                        <div className="flex mt-1">
                            <img src={lupa} alt="" className="w-8 h-8" />
                            <p className="py-1.5 ml-3">Buscar partidas</p>
                        </div>
                    </Link>


                    <div className="bg-[#0c0c0c] h-0.5 w-90 roundde-lg"></div>

                    <div className="flex mt-1">
                        <img src={quadra} alt="" className="w-8 h-8" />
                        <p className="py-1.5 ml-3">Quadras parceiras</p>
                    </div>

                    <div className="bg-[#0c0c0c] h-0.5 w-90 roundde-lg"></div>

                    <div className="flex mt-1">
                        <img src={loja} alt="" className="w-8 h-8" />
                        <p className="py-1.5 ml-3">Loja Passa Bola</p>
                    </div>

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
