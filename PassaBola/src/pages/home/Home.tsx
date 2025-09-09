import { Link } from "react-router-dom";
import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/home.png";
import video from "../../imgs/video.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfil.png";

export default function Home() {
    return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white">
        <header className="w-full shadow-md z-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <div className="w-12" />

                <div className="flex-grow max-w-md mx-6">
                    <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-400"
                    />
                </div>

                <img
                    src={logo}
                    alt="Logo"
                    className="h-12 w-12 object-contain"
                />

            </div>
            <div className="w-full h-0.5 bg-[#ec4d9d]"></div>
        </header>


        {/*Conteúdo das página */}

        <footer className="fixed bottom-0 w-full bg-[#000000] z-2">
            <div className="w-full h-0.5 bg-[#ec4d9d]"></div>
            <div className="flex gap-20 justify-center">
                <Link to="/home">
                    <img src={casa} alt="" className="w-10 h-10"/>
                </Link>
                <img src={video} alt="" className="w-10 h-10"/>
                <Link to="/jogos">
                    <img src={bola} alt="Perfil" className="w-10 h-10" />
                </Link>
                <img src={perfil} alt="" className="w-10 h-10"/>
            </div>
        </footer>
    </div>
    );
}
