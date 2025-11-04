import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Jogadora } from "../../data/jogadoras";

import casa from "../../imgs/homevazia.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfil.png";
import jogadora1 from "../../imgs/jogadora1.png";
import jogadora7 from "../../imgs/jogadora7.png";
import microfone from "../../imgs/microfone.png";
import clip from "../../imgs/clip.png";

export default function Chat3() {
    const [jogadora, setJogadora] = useState<Jogadora | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem("jogadoraLogada");
        if (data) {
            try {
                setJogadora(JSON.parse(data));
            } catch {
                // Se o parse falhar, remove e redireciona ao login
                localStorage.removeItem("jogadoraLogada");
                navigate("/login");
            }
        } else {
            navigate("/login");
        }
    }, [navigate]);

    // foto com fallback para imagem padrão
    const fotoSrc = jogadora?.foto || perfil;

    return (
        <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white">
            <div className="h-20"></div>

            <div className="justify-center flex">
                <div className="bg-black rounded-lg w-90 h-135">
                    <div className="flex mt-2">
                        <div className="bg-white w-60 h-20 rounded-lg ml-28 text-black p-2 mr-1">
                            Olá, posso jogar na ponta direita? Me destaco mais lá
                        </div>
                        <img
                            src={fotoSrc}
                            alt={jogadora ? `${jogadora.nome} foto` : "Foto padrão"}
                            className="w-10 h-10 mr-1 rounded-full"
                        />
                    </div>

                    <div className="flex mt-2">
                        <img src={jogadora7} alt="jogadora7" className="w-10 h-10 ml-1" />
                        <div className="bg-[#c0c0c0] w-60 h-10 rounded-lg p-2 text-black ml-1">
                            Sinta-se a vontade.
                        </div>
                    </div>

                    <div className="flex mt-2">
                        <img src={jogadora1} alt="jogadora1" className="w-10 h-10 ml-1" />
                        <div className="bg-[#9b9b9b] w-60 h-17 rounded-lg p-2 text-black ml-1">
                            Alguém sabe como vai funcionar o pagamento?
                        </div>
                    </div>

                    <div className="w-full h-0.5 bg-[#ec4d9d] mt-70"></div>

                    <div className="justify-center flex mt-1 gap-2">
                        <img src={microfone} alt="microfone" className="h-8 w-8 mt-1" />
                        <input
                            type="text"
                            placeholder=" Digitar..."
                            className="w-60 h-10 rounded-lg bg-white text-black placeholder-gray-400 p-1"
                        />
                        <img src={clip} alt="clip" className="h-8 w-8 mt-1" />
                    </div>
                </div>
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
