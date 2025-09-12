import { Link } from "react-router-dom";
import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/home.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfilvazio.png";
import time from "../../imgs/team.png";

import jogadora1 from "../../imgs/jogadora1.png";


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
                <Link to="/times">
                    <div className="flex mt-1">
                        <img src={time} alt="" className="w-8 h-8"/>
                        <p className="py-1.5 ml-3">Meus times</p>
                    </div>
                </Link>
                
                <div className="bg-[#0c0c0c] h-0.5 w-90 roundde-lg"></div>
                
                <div className=" flex justify-center">
                    <p className="text-white text-center mt-3 bg-[#036800] w-40 rounded-lg hover:bg-[#035000]">Criar time</p>
                </div>
                
                <div className="flex justify-center">
                    <div className="bg-white w-70 h-50 mt-5 rounded-lg">
                        <div className="rounded-tr-lg rounded-tl-lg bg-green-600">
                            <p className="text-center items-center">Time do Trabalho</p>
                        </div>
                        <div className="p-4">
                            <div className="flex">
                                <img src={jogadora1} alt="" className="w-7 h-7"/>
                                <p className="text-black font-bold ml-1">@roberta01 |</p>
                                <p className="bg-blue-600 rounded-lg ml-1 text-black w-9 text-center"> GOL</p>
                            </div>
                            <div className="flex mt-2">
                                <img src={jogadora1} alt="" className="w-7 h-7"/>
                                <p className="text-black font-bold ml-1">@luisa._ |</p>
                                <p className="bg-red-600 rounded-lg ml-1 text-black w-7 text-center">PD</p>
                                <p className="bg-green-600 rounded-lg ml-1 text-black w-8 text-center">MC</p>
                            </div>
                            <div className="flex mt-2">
                                <img src={jogadora1} alt="" className="w-7 h-7"/>
                                <p className="text-black font-bold ml-1">@aninhaaa |</p>
                                <p className="bg-[#fffb00] rounded-lg ml-1 text-black w-7 text-center"> LE</p>
                            </div>
                            <div className=" flex justify-center">
                                <p className="text-black text-center mt-3 bg-[#dfdfdf] w-40 rounded-lg hover:bg-[#bbbbbb]">Adicionar jogadora</p>
                            </div>
                        </div>
                    </div>
                </div>
                



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
