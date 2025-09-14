import { Link } from "react-router-dom";


import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/home.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfilvazio.png";
import jogadora1 from "../../imgs/jogadora1.png";
import jogadora2 from "../../imgs/Jogadora2.png";

export default function Pesquisa() {
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
            <div className="h-25"></div>
            
            <div className="justify-center flex">
                <div className="flex bg-[#000000] rounded-lg w-90 h-80 p-4 border border-black">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <p className="text-white mt-2">Últimas pesquisas</p>
                            <p className="text-blue-500 mt-2">Limpar tudo</p>
                        </div>
                        <Link to="/perfil">
                            <div className="bg-[#050505] w-full h-20 mt-4 p-1 flex flex-row">
                                <img src={jogadora1} alt="" className="w-17 h-17"/>
                                <p className="font-bold mt-5 px-5">@anacarvalho17</p>
                            </div>
                        </Link>
                        <Link to="/perfil2">
                            <div className="bg-[#050505] w-full h-20 mt-4 p-1 flex flex-row">
                                <img src={jogadora2} alt="" className="w-17 h-17"/>
                                <p className="font-bold mt-5 px-5">@betsantos</p>
                            </div>
                        </Link>
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
