import { Link } from "react-router-dom";

import casa from "../../imgs/home.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfilvazio.png";
import time from "../../imgs/team.png";

import jogadora3 from "../../imgs/jogadora3.png";
import jogadora4 from "../../imgs/jogadora4.png";
import jogadora5 from "../../imgs/jogadora5.png";


export default function Times() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b1020] to-[#21102a] text-white">
            
            <div className="h-20"></div>


            <div className="flex justify-center">
                <div className="bg-[#00000069] w-100 h-125 p-4 rounded-lg lg:w-150">
                    <Link to="/times">
                        <div className="flex mt-1">
                            <img src={time} alt="" className="w-8 h-8" />
                            <p className="py-1.5 ml-3">Meus times</p>
                        </div>
                    </Link>

                    <div className="bg-[#0c0c0c] h-0.5 w-90 rounded-lg lg:w-140"></div>

                    <div className=" flex justify-center">
                        <p className="text-white text-center mt-3 bg-[#036800] w-40 rounded-lg hover:bg-[#035000]">Criar time</p>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-white w-70 h-50 mt-5 rounded-lg lg:w-140 lg:h-55">
                            <div className="rounded-tr-lg rounded-tl-lg bg-green-600">
                                <p className="text-center items-center">Time do Trabalho</p>
                            </div>
                            <div className="p-4">
                                <div className="flex">
                                    <img src={jogadora5} alt="" className="w-7 h-7 lg:w-8 lg:h-8" />
                                    <p className="text-black font-bold ml-1 lg:text-lg">@alexavier |</p>
                                    <p className="bg-blue-600 rounded-lg ml-1 text-black w-9 text-center"> GOL</p>
                                </div>
                                <div className="h-0.5 w-60 mt-1 justify-center flex bg-[#f1f1f1] lg:w-130"></div>
                                <div className="flex mt-2">
                                    <img src={jogadora3} alt="" className="w-7 h-7 lg:w-8 lg:h-8" />
                                    <p className="text-black font-bold ml-1 lg:text-lg">@carolfaixa10 |</p>
                                    <p className="bg-red-600 rounded-lg ml-1 text-black w-7 text-center">PD</p>
                                    <p className="bg-green-600 rounded-lg ml-1 text-black w-8 text-center">MC</p>
                                </div>
                                <div className="h-0.5 w-60 mt-1 justify-center flex bg-[#f1f1f1] lg:w-130"></div>
                                <div className="flex mt-2">
                                    <img src={jogadora4} alt="" className="w-7 h-7 lg:w-8 lg:h-8" />
                                    <p className="text-black font-bold ml-1 lg:text-lg">@luanamaluf |</p>
                                    <p className="bg-[#fffb00] rounded-lg ml-1 text-black w-7 text-center"> LE</p>
                                </div>
                                <div className="h-0.5 w-60 mt-1 justify-center flex bg-[#f1f1f1] lg:w-130"></div>

                                <div className=" flex justify-center">
                                    <p className="text-black text-center mt-3 bg-[#dfdfdf] w-40 rounded-lg hover:bg-[#bbbbbb]">Adicionar jogadora</p>
                                </div>
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
