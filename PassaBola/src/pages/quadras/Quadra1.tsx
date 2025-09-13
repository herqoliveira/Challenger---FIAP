import { Link } from "react-router-dom";
import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/home.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfilvazio.png";



export default function Times() {
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
                
            </div>
        </div>








        <div className="h-10"></div>

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
