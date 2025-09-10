import { Link } from "react-router-dom";
import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/home.png";
import video from "../../imgs/video.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfil.png";
import video1 from "../../imgs/video1.png";
import jogadora1 from "../../imgs/jogadora1.png";

export default function Videos() {
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

        <div className="flex justify-center flex-col items-center gap-4">
            <div className="gap-10">
                <div className="bg-white w-90 h-90 flex flex-col rounded-lg">
                    <div className="flex gap-5 px-4 py-4">
                        <img src={jogadora1} alt="" className="w-10 h-10"/>
                        <p className="text-black py-1.5 font-bold">Ana Carvalho Oliveira</p>
                    </div>
                    <p className="text-black px-4">Olhem o gol que fiz ontem no final do Campeonato Tocantis Delas. Ganhamos e ganhei a medalha de melhor do time!!</p>
                    <img src={video1} alt="" className="p-4 w-90 h-50 rounded-lg"/>
                </div>
            </div>
            <div className="gap-10">
                <div className="bg-white w-90 h-90 flex flex-col rounded-lg">
                    <div className="flex gap-5 px-4 py-4">
                        <img src={jogadora1} alt="" className="w-10 h-10"/>
                        <p className="text-black py-1.5 font-bold">Ana Carvalho Oliveira</p>
                    </div>
                    <p className="text-black px-4">Olhem o gol que fiz ontem no final do Campeonato Tocantis Delas. Ganhamos e ganhei a medalha de melhor do time!!</p>
                    <img src={video1} alt="" className="p-4 w-90 h-50 rounded-lg"/>
                </div>
            </div>
        </div>
        

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
                 <Link to="/perfil">
                    <img src={perfil} alt="" className="w-10 h-10"/>
                </Link>
            </div>
        </footer>
    </div>
    );
}
