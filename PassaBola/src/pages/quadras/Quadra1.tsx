import { Link } from "react-router-dom";

import casa from "../../imgs/home.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfilvazio.png";

import jogadora2 from "../../imgs/Jogadora2.png";
import jogadora1 from "../../imgs/jogadora1.png";
import jogadora6 from "../../imgs/jogadora6.png";
import jogadora7 from "../../imgs/jogadora7.png";
import jogadora8 from "../../imgs/jogadora8.png";


import quadra1 from "../../imgs/quadra1.jpg";

export default function Quadra1() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white">
            
            <div className="h-20"></div>

            <div className="flex justify-center">

                <div className="bg-black w-90 p-4 rounded-lg lg:w-auto lg:flex lg:gap-8">

                    <div className="flex justify-center">
                        <div className="grid grid-cols-5 grid-rows-10 w-92 h-103 lg:h-115 bg-cover" style={{ backgroundImage: `url(${quadra1})` }}>

                            <div className="col-start-3 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-fullflex items-center justify-center "><img src={jogadora8} alt="" /></div>
                            </div>
                            <div className="row-start-2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-red-700 hover:bg-red-800 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-red-700 hover:bg-red-800 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-2 col-start-4 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-red-700 hover:bg-red-800 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-2 col-start-5 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center "><img src={jogadora1} alt="" /></div>
                            </div>
                            <div className="row-start-3 col-start-3 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-red-700 hover:bg-red-800 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-4 col-start-2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-red-700 hover:bg-red-800 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-4 col-start-4 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-red-700 hover:bg-red-800 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-5 col-start-1 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center "><img src={jogadora6} alt="" /></div>
                            </div>
                            <div className="row-start-5 col-start-3 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-red-700 hover:bg-red-800 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-5 col-start-5 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-red-700 hover:bg-red-800 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-6 col-start-1 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-800 hover:bg-purple-900 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-6 col-start-3 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-800 hover:bg-purple-900 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-6 col-start-5 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center"><img src={jogadora2} alt="" /></div>
                            </div>
                            <div className="row-start-7 col-start-2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center "><img src={jogadora7} alt="" /></div>
                            </div>
                            <div className="row-start-7 col-start-4 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-800 hover:bg-purple-900 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-8 col-start-3 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-800 hover:bg-purple-900 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-9 col-start-1 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-800 hover:bg-purple-900 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-9 col-start-2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-800 hover:bg-purple-900 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-9 col-start-4 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-800 hover:bg-purple-900 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-9 col-start-5 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-800 hover:bg-purple-900 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                            <div className="row-start-10 col-start-3 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-800 hover:bg-purple-900 flex items-center justify-center text-white text-xs">+</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="justify-center flex mt-5 lg:mt-0">
                            <div className="bg-white w-88 h-43 rounded-lg">
                                <p className="text-black text-center font-bold">Banco de reservas</p>
                                <p className="text-black ml-3 font-bold">Lista de reservas:</p>
                                <div className="h-0.5 w-77 justify-center flex bg-[#cecece] ml-3"></div>
                                <ul className="text-black ml-5">
                                    <li>Ana Luisa Carvalho</li>
                                    <div className="h-0.5 w-75 justify-center flex bg-[#f1f1f1]"></div>
                                    <li>Andressa Guastaferro</li>
                                    <div className="h-0.5 w-75 justify-center flex bg-[#f1f1f1]"></div>
                                    <li>Fernanda Julião</li>
                                    <div className="h-0.5 w-75 justify-center flex bg-[#f1f1f1]"></div>
                                </ul>
                                <div className="flex justify-center">
                                    <p className="mt-2 text-black bg-[#dbdbdb] hover:bg-[#c5c5c5] w-27 rounded-lg text-center">Ir para banco</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className=" justify-center flex mt-5">
                            <div className="bg-green-500 w-60 h-8 rounded-lg hover:bg-green-700">
                                <p className="text-center">Completar com time já pronto</p>
                            </div>
                        </div>
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