import { Link } from "react-router-dom";
import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/homevazia.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfil.png";
import jogadora2 from "../../imgs/Jogadora2.png";
import jogadora3 from "../../imgs/Jogadora3.png";
import microfone from "../../imgs/microfone.png";
import clip from "../../imgs/clip.png";

export default function ChatPv2() {
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
        
        <div className="justify-center flex">
            <div className="bg-black rounded-lg w-90 h-120">
                <div className="flex mt-2">
                    <div className="bg-white w-60 h-30 rounded-lg ml-28 text-black p-2">Olá, tudo bem, vi seus vídeos e gostei bastante, gostaria de saber se você conhece o Varginha FC?</div>
                    <img src={jogadora3} alt="" className="w-10 h-10" />
                </div>
                <div className="flex mt-2">
                    <img src={jogadora2} alt="" className="w-10 h-10" />
                    <div className="bg-[#c0c0c0] w-60 h-17 rounded-lg p-2 text-black">Nossa, fico muito feliz em saber, conheço sim!!</div>
                </div>
                <div className="w-full h-0.5 bg-[#ec4d9d] mt-55"></div>
                <div className="justify-center flex mt-1 gap-2">
                    <img src={microfone} alt="" className="h-8 w-8 mt-1" />
                    <input
                            type="text"
                            placeholder=" Digitar..."
                            className="w-60 h-10 rounded-lg bg-white text-black placeholder-gray-400 p-1"
                        />
                    <img src={clip} alt="" className="h-8 w-8 mt-1" />
                </div>
            </div>  
        </div>


        <div className="h-15"></div>

        <footer className="fixed bottom-0 w-full bg-[#000000] z-2">
            <div className="w-full h-0.5 bg-[#ec4d9d]"></div>
            <div className="flex gap-20 justify-center">
                <Link to="/home">
                    <img src={casa} alt="" className="w-10 h-10"/>
                </Link>
                <Link to="/videos">
                        <img src={video} alt="" className="w-10 h-10" />
                </Link>
                <Link to="/jogos">
                    <img src={bola} alt="Perfil" className="w-10 h-10" />
                </Link>
                 <Link to="/perfil3">
                    <img src={perfil} alt="" className="w-10 h-10"/>
                </Link>
            </div>
        </footer>
    </div>
    );
}
