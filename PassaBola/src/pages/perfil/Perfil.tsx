import { Link } from "react-router-dom";
import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/homevazia.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfil.png";
import chat from "../../imgs/chat.png";
import jogadora1 from "../../imgs/jogadora1.png";
import video1 from "../../imgs/video1.png";
import foto2 from "../../imgs/imagem2jogadora.webp";
import voltar from "../../imgs/voltar.png";

export default function Perfil() {
    return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white">
        <header className="fixed top-0 w-full shadow-md z-2 bg-[#000000]">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <Link to="/pesquisa">
                    <img
                        src={voltar}
                        alt="Logo"
                        className="h-8 w-8 object-contain"
                    />
                </Link>

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
                <img src={jogadora1} alt="" className="w-35 h-35"/>
                <h3 className="text-center font-bold">@anacarvalho17</h3>
            </div>
            <div className="flex flex-col px-10 py-10">
                <ol>
                    <li>• Lateral direita</li>
                    <li>• Tocantis</li>
                    <li>• Botafoguense 🔥</li>
                </ol>
                <Link to="/chatpv">
                    <img src={chat} alt="" className="w-18 h-18"/>
                </Link>
                
            </div>
        </div>

        <div className="flex justify-center">
            <div className="h-1 bg-gray-900 w-100 rounded-lg"></div>
        </div>


        <div className="flex justify-center flex-col items-center gap-4 py-5">
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
                <div className="bg-white w-90 h-93 flex flex-col rounded-lg">
                    <div className="flex gap-5 px-4 py-4">
                        <img src={jogadora1} alt="" className="w-10 h-10"/>
                        <p className="text-black py-1.5 font-bold">Ana Carvalho Oliveira</p>
                    </div>
                    <p className="text-black px-4">Hoje mais cedo tive a oportunidade de fazer um ensaio de fotos com meu amigo Abel, recomendo muito e estou muito contente com minhas fotos.</p>
                    <img src={foto2} alt="" className="p-4 w-90 h-50 rounded-lg"/>
                </div>
            </div>
            <h3>Carregando...</h3>
        </div>


        <div className="h-10"></div>
        <footer className="fixed bottom-0 w-full bg-[#000000] z-2">
            <div className="w-full h-0.5 bg-[#ec4d9d]"></div>
            <div className="flex gap-20 justify-center">
                <Link to="/home">
                    <img src={casa} alt="" className="w-10 h-10"/>
                </Link>
                <Link to="/videos">
                    <img src={video} alt="" className="w-10 h-10"/>
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
