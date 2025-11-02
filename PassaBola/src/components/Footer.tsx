import { Link } from "react-router-dom";
import casa from "../imgs/home.png";
import video from "../imgs/videovazio.png";
import bola from "../imgs/bola.png";
import perfil from "../imgs/perfilvazio.png";

export default function Footer() {
    return (
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
        <aside className="fixed z-1 w-35 h-full bg-black flex-col items-center py-4 hidden lg:flex">
            <div className="mt-40">
                <Link to="/home">
                    <div className="flex">
                        <img src={casa} alt="Home" className="w-10 h-10 mb-6" />
                        <p className="mt-2.5 ml-1 font-bold">Home</p>
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
