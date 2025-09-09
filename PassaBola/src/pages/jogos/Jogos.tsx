import { Link } from "react-router-dom";

import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/home.png";
import video from "../../imgs/video.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfil.png";

import filtro from "../../imgs/filtro.png";
import palmeiras from "../../imgs/Palmeiras.png";
import santos from "../../imgs/Santos.png";
import ferroviaria from "../../imgs/Ferroviaria.png";
import vasco from "../../imgs/Vasco.png";
import merda from "../../imgs/corinthians.png";
import cruzeiro from "../../imgs/Cruzeiro.png";
import flamengo from "../../imgs/Flamengo.png";
import gremio from "../../imgs/Gremio.png";
import saopaulo from "../../imgs/saopaulo.png";
import fluminense from "../../imgs/Fluminense.png";

export default function Jogos() {
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


        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-11">
            <div className="w-12" />
            <div className="bg-[#eee] border rounded-lg border-[#ec4d9d] text-black w-50 text-center p-2">Jogos ao vivo 🔴</div>
            <div className=" rounded-lg"><img src={filtro} alt="" className="w-10 h-10" /></div>
        </div>

        <div className="flex flex-col items-center gap-4">
            <div className="bg-[#000000] w-100 h-25 rounded-lg flex gap-5 py-2 justify-center">
                <img src={palmeiras} alt="" className="w-20 h-20" />
                <h1 className="text-white text-3xl py-4.5">3</h1>
                <div className="block text-center">
                    <h1 className="text-[#fff]">Brasileirão</h1>
                    <h3 className="text-green-500">Intervalo</h3>
                </div> 
                <h1 className="text-white text-3xl py-4.5">1</h1>
                <img src={santos} alt="" className="w-20 h-20"/>
            </div>

            <div className="bg-[#000000] w-100 h-25 rounded-lg flex gap-5 py-2 justify-center">
                <img src={ferroviaria} alt="" className="w-20 h-20" />
                <h1 className="text-white text-3xl py-4.5">1</h1>
                <div className="block text-center">
                    <h1 className="text-[#fff]">Copa do Br</h1>
                    <h3 className="text-green-500">65 min</h3>
                </div> 
                <h1 className="text-white text-3xl py-4.5">1</h1>
                <img src={vasco} alt="" className="w-20 h-20"/>
            </div>

            <div className="bg-[#000000] w-100 h-25 rounded-lg flex gap-5 py-2 justify-center">
                <img src={merda} alt="" className="w-20 h-20" />
                <h1 className="text-white text-3xl py-4.5">1</h1>
                <div className="block text-center">
                    <h1 className="text-[#fff]">Copa do Br</h1>
                    <h3 className="text-green-500">13 min</h3>
                </div> 
                <h1 className="text-white text-3xl py-4.5">1</h1>
                <img src={cruzeiro} alt="" className="w-20 h-20"/>
            </div>

            <div className="bg-[#000000] w-100 h-25 rounded-lg flex gap-5 py-2 justify-center">
                <img src={flamengo} alt="" className="w-20 h-20" />
                <h1 className="text-white text-3xl py-4.5">5</h1>
                <div className="block text-center">
                    <h1 className="text-[#fff]">Brasileirão</h1>
                    <h3 className="text-green-500">Intervalo</h3>
                </div> 
                <h1 className="text-white text-3xl py-4.5">0</h1>
                <img src={gremio} alt="" className="w-20 h-20"/>
            </div>

            <div className="bg-[#000000] w-100 h-25 rounded-lg flex gap-5 py-2 justify-center">
                <img src={fluminense} alt="" className="w-20 h-20" />
                <h1 className="text-white text-3xl py-4.5">0</h1>
                <div className="block text-center">
                    <h1 className="text-[#fff]">Brasileirão</h1>
                    <h3 className="text-green-500">14 min</h3>
                </div> 
                <h1 className="text-white text-3xl py-4.5">0</h1>
                <img src={saopaulo} alt="" className="w-20 h-20"/>
            </div>


            <div className="bg-gray-800 w-95 h-25 rounded-lg flex items-center justify-center">
                <p className="text-white">Outra partida</p>
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
                <img src={perfil} alt="" className="w-10 h-10"/>
            </div>
        </footer>
    </div>
    );
}
