import { Link } from "react-router-dom";



import casa from "../../imgs/homevazia.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bolacheia.png";
import perfil from "../../imgs/perfilvazio.png";

import filtro from "../../imgs/filtro.png";
import palmeiras from "../../imgs/Palmeiras.png";
import santos from "../../imgs/Santos.png";
import ferroviaria from "../../imgs/Ferroviaria.png";
import vasco from "../../imgs/Vasco.png";

import corinthians from "../../imgs/corinthians.png";
import cruzeiro from "../../imgs/Cruzeiro.png";

import flamengo from "../../imgs/Flamengo.png";
import gremio from "../../imgs/Gremio.png";
import saopaulo from "../../imgs/saopaulo.png";
import fluminense from "../../imgs/Fluminense.png";

export default function Jogos() {




    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b1020] to-[#21102a] text-white">
            <div className="h-25"></div>

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-11">
                <div className="w-12" />
                <div className="bg-[#00000069] border rounded-lg border-[#ec4d9d] text-white w-50 text-center p-2">Jogos ao vivo 🔴</div>
                <div className=" rounded-lg"><img src={filtro} alt="" className="w-10 h-10" /></div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="bg-[#00000069] w-100 h-25 rounded-lg flex gap-5 py-2 justify-center">
                    <img src={palmeiras} alt="" className="w-20 h-20" />
                    <h1 className="text-white text-3xl py-4.5">3</h1>
                    <div className="block text-center">
                        <h1 className="text-[#fff]">Brasileirão</h1>
                        <h3 className="text-green-500">Intervalo</h3>
                    </div>
                    <h1 className="text-white text-3xl py-4.5">1</h1>
                    <img src={santos} alt="" className="w-20 h-20" />
                </div>

                <div className="bg-[#00000069] w-100 h-25 rounded-lg flex gap-5 py-2 justify-center">
                    <img src={cruzeiro} alt="" className="w-20 h-20" />
                    <h1 className="text-white text-3xl py-4.5">1</h1>
                    <div className="block text-center">
                        <h1 className="text-[#fff]">Copa do Br</h1>
                        <h3 className="text-green-500">65 min</h3>
                    </div>
                    <h1 className="text-white text-3xl py-4.5">1</h1>
                    <img src={corinthians} alt="" className="w-20 h-20" />
                </div>


                <div className="bg-[#00000069] w-100 h-25 rounded-lg flex gap-5 py-2 justify-center">
                    <img src={ferroviaria} alt="" className="w-20 h-20" />
                    <h1 className="text-white text-3xl py-4.5">5</h1>
                    <div className="block text-center">
                        <h1 className="text-[#fff]">Brasileirão</h1>
                        <h3 className="text-green-500">Intervalo</h3>
                    </div>
                    <h1 className="text-white text-3xl py-4.5">0</h1>
                    <img src={vasco} alt="" className="w-20 h-20" />
                </div>


                <div className="bg-[#00000069] w-100 h-25 rounded-lg flex gap-5 py-2 justify-center">
                    <img src={flamengo} alt="" className="w-20 h-20" />
                    <h1 className="text-white text-3xl py-4.5">5</h1>
                    <div className="block text-center">
                        <h1 className="text-[#fff]">Brasileirão</h1>
                        <h3 className="text-green-500">Intervalo</h3>
                    </div>
                    <h1 className="text-white text-3xl py-4.5">0</h1>
                    <img src={gremio} alt="" className="w-20 h-20" />
                </div>

                <div className="bg-[#00000069] w-100 h-25 rounded-lg flex gap-5 py-2 justify-center">
                    <img src={fluminense} alt="" className="w-20 h-20" />
                    <h1 className="text-white text-3xl py-4.5">0</h1>
                    <div className="block text-center">
                        <h1 className="text-[#fff]">Brasileirão</h1>
                        <h3 className="text-green-500">14 min</h3>
                    </div>
                    <h1 className="text-white text-3xl py-4.5">0</h1>
                    <img src={saopaulo} alt="" className="w-20 h-20" />
                </div>
                <h3 className="lg:mb-4">Carregando...</h3>
            </div>


            <div className="h-15 lg:hidden"></div>
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
                            <p className="mt-2.5 ml-1 font-bold">Jogos</p>
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
