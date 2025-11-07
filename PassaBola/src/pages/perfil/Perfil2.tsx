import { Link } from "react-router-dom";

import casa from "../../imgs/homevazia.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfil.png";
import chat from "../../imgs/chat.png";
import jogadora2 from "../../imgs/Jogadora2.png";
import video1 from "../../imgs/video5.png";


export default function Perfil2() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b1020] to-[#21102a] text-white">
            
            <div className="h-25"></div>


            <div className="flex justify-center">
                <div className="flex flex-col py-6">
                    <img src={jogadora2} alt="" className="w-35 h-35" />
                    <h3 className="text-center font-bold">@betsantos</h3>
                </div>
                <div className="flex flex-col px-10 py-10">
                    <ol>
                        <li>• Zagueira</li>
                        <li>• Bragança</li>
                        <li>• Bragantina 🔴⚪</li>
                    </ol>
                    <Link to="/chatpv2">
                        <img src={chat} alt="" className="w-18 h-18" />
                    </Link>

                </div>
            </div>

            <div className="flex justify-center">
                <div className="h-1 bg-[#5e5e5e] w-100 rounded-lg"></div>
            </div>


            <div className="flex justify-center flex-col items-center gap-4 py-5">
                <div className="gap-10">
                    <div className="bg-[#00000069] w-90 h-90 flex flex-col rounded-lg">
                        <div className="flex gap-5 px-4 py-4">
                            <img src={jogadora2} alt="" className="w-10 h-10" />
                            <p className="text-white py-1.5 font-bold">Betânia Santos Machado</p>
                        </div>
                        <p className="text-white px-4">Apenas observem essa pintura que fiz ontem no jogo do campeonato amador de Bragança 🤫</p>
                        <img src={video1} alt="" className="p-4 w-90 h-50 rounded-lg" />
                    </div>
                </div>
                <h3>Carregando...</h3>
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
