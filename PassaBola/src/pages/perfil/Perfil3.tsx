import { Link } from "react-router-dom";
import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/homevazia.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfil.png";
import jogadora3 from "../../imgs/jogadora3.png";
import chuteira from "../../imgs/chuteira.jpg";

export default function Perfil2() {
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
            <div className="h-25"></div>


            <div className="flex justify-center">
                <div className="flex flex-col py-6">
                    <img src={jogadora3} alt="" className="w-35 h-35" />
                    <h3 className="text-center font-bold">@carolfaixa10</h3>
                </div>
                <div className="flex flex-col px-10 py-10">
                    <ol>
                        <li>• Ponta direita</li>
                        <li>• Utinga - Santo André</li>
                        <li>• Santos 🐋</li>
                    </ol>
                    <div className="text-black bg-white mt-5 text-center rounded-lg">Editar perfil</div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="h-1 bg-gray-900 w-100 rounded-lg"></div>
            </div>


            <div className="flex justify-center flex-col items-center gap-4 py-5">
                <div className="gap-10">
                    <div className="bg-white w-90 h-80 flex flex-col rounded-lg">
                        <div className="flex gap-5 px-4 py-4">
                            <img src={jogadora3} alt="" className="w-10 h-10" />
                            <p className="text-black py-1.5 font-bold">Caroline Silva Kolomyes</p>
                        </div>
                        <p className="text-black px-4">Olhem minha chuteira nova!! Ganhei da minha patrocinadora (minha mãe 🤣🥰).</p>
                        <img src={chuteira} alt="" className="p-4 w-90 h-50 rounded-lg" />
                    </div>
                </div>
                <h3>Carregando...</h3>
            </div>


            <div className="h-10"></div>
            <footer className="fixed bottom-0 w-full bg-[#000000] z-2">
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
        </div>
    );
}
