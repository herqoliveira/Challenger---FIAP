import { Link } from "react-router-dom";
import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/homevazia.png";
import video from "../../imgs/video.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfilvazio.png";

import video1 from "../../imgs/video1.png";
import video2 from "../../imgs/video2.jpg";
import video3 from "../../imgs/video3.jpg";
import video4 from "../../imgs/video4.jpeg";


import jogadora1 from "../../imgs/jogadora1.png";
import jogadora2 from "../../imgs/Jogadora2.png";
import jogadora3 from "../../imgs/jogadora3.png";
export default function Videos() {
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
            <div className="flex justify-center flex-col items-center gap-4">
                <div className="gap-10">
                    <div className="bg-white w-90 h-90 flex flex-col rounded-lg">
                        <div className="flex gap-5 px-4 py-4">
                            <img src={jogadora1} alt="" className="w-10 h-10" />
                            <p className="text-black py-1.5 font-bold">Ana Carvalho Oliveira</p>
                        </div>
                        <p className="text-black px-4">Olhem o gol que fiz ontem no final do Campeonato Tocantis Delas. Ganhamos e ganhei a medalha de melhor do time!!</p>
                        <img src={video1} alt="" className="p-4 w-90 h-50 rounded-lg" />
                    </div>
                </div>
                <div className="gap-10">
                    <div className="bg-white w-90 h-105 flex flex-col rounded-lg">
                        <div className="flex gap-5 px-4 py-4">
                            <img src={jogadora2} alt="" className="w-10 h-10" />
                            <p className="text-black py-1.5 font-bold">Betinha Santos</p>
                        </div>
                        <p className="text-black px-4">Que jogo intenso no barrão hoje! Muita marcação, muita garra e aquela energia da torcida que faz toda a diferença. Saímos cansadas, mas felizes demais com o resultado. Futebol é isso: luta, união e alegria em cada lance!</p>
                        <img src={video2} alt="" className="p-4 w-90 h-50 rounded-lg" />
                    </div>
                </div>
                <div className="gap-10">
                    <div className="bg-white w-90 h-105 flex flex-col rounded-lg">
                        <div className="flex gap-5 px-4 py-4">
                            <img src={jogadora3} alt="" className="w-10 h-10" />
                            <p className="text-black py-1.5 font-bold">Caroline Silva</p>
                        </div>
                        <p className="text-black px-4">Final do interclasse foi pura emoção! Nosso time jogou junto o tempo todo, com muita correria e vontade de vencer. Fechamos o campeonato com chave de ouro e ainda garanti meu destaque no jogo. Orgulho demais da nossa equipe!</p>
                        <img src={video3} alt="" className="p-4 w-90 h-50 rounded-lg" />
                    </div>
                </div>
                <div className="gap-10">
                    <div className="bg-white w-90 h-105 flex flex-col rounded-lg">
                        <div className="flex gap-5 px-4 py-4">
                            <img src={jogadora1} alt="" className="w-10 h-10" />
                            <p className="text-black py-1.5 font-bold">Ana Carvalho Oliveira</p>
                        </div>
                        <p className="text-black px-4">Ontem o jogo foi emocionante demais! Partida disputada até o último minuto no Campeonato Noturno, e conseguimos segurar a vitória. Joguei com raça e dei tudo de mim dentro de campo. Que sensação incrível sair com a vitória ao lado desse time maravilhoso!</p>
                        <img src={video4} alt="" className="p-4 w-90 h-50 rounded-lg" />
                    </div>
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
                            <p className="mt-2.5 ml-1 ">Home</p>
                        </div>
                    </Link>
                    <Link to="/videos">
                        <div className="flex">
                            <img src={video} alt="Vídeos" className="w-10 h-10 mb-6" />
                            <p className="mt-2.5 ml-1 font-bold">Vídeos</p>
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
