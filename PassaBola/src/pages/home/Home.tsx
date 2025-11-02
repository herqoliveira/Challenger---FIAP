import { Link } from "react-router-dom";



import casa from "../../imgs/home.png";
import video from "../../imgs/videovazio.png";
import bola from "../../imgs/bola.png";
import perfil from "../../imgs/perfilvazio.png";

import noticia2 from "../../imgs/noticia2.webp";
import noticia3 from "../../imgs/noticia3.webp";
import site from "../../imgs/selecaobrasileira.png";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white">
            <div className="h-20"></div>
            <div className="flex justify-center">
                <div className="flex flex-col gap-4 p-4 bg-black h-282 w-98 lg:w-150">

                    <div className="bg-green-700 text-white w-90 rounded-lg shadow p-4 lg:w-140">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-center">SANTOS 0 X 3 PALMEIRAS</p>
                        </div>
                        <p className="text-xs mt-2">🟥 Marcela 54'</p>
                        <p className="text-xs">⚽ Aninha 18' | Ruth 45+1' | Beatriz 79'</p>
                        <p className="text-yellow-300 text-xs mt-1">⏸️ Intervalo</p>
                    </div>



                    <div className="bg-white w-90 justify-center rounded-lg lg:w-140 cover lg:h-90">
                        <img
                            src={site}
                            alt="Brasil encara a Espanha nas quartas"
                            className="w-85 h-40 object-cover ml-2.5 mt-2 rounded-lg lg:w-135 lg:h-55"
                        />
                        <div className="p-3">
                            <p className="text-black text-sm">
                                Brasil encara a Espanha nas quartas do futebol feminino nos Jogos de Paris
                            </p>
                            <a target="_blank" href="https://diariodonordeste.verdesmares.com.br/jogada/brasil-encara-a-espanha-nas-quartas-do-futebol-feminino-nos-jogos-de-paris-saiba-detalhes-1.3542913"><span className="text-blue-700 text-xs font-bold">Diário do Nordeste</span></a>
                        </div>
                    </div>



                    <div className="bg-white w-90 flexjustify-center rounded-lg lg:w-140 lg:h-80">
                        <img
                            src={noticia2}
                            alt="Brasil encara a Espanha nas quartas"
                            className="w-85 h-40 object-cover ml-2.5 mt-2 rounded-lg lg:w-135"
                        />
                        <div className="p-3">
                            <p className="text-black text-sm">
                                Força do Cruzeiro é boa notícia para o futebol feminino, diz Fabíola Andrade
                            </p>
                            <a target="_blank" href="https://www.uol.com.br/esporte/futebol/ultimas-noticias/2025/09/07/forca-do-cruzeiro-e-boa-noticia-para-futebol-feminino-diz-fabiola-andrade.htm"><span className="text-blue-700 text-xs font-bold">UOL Esporte</span></a>
                        </div>
                    </div>

                    <div className="bg-green-700 text-white w-90 rounded-lg shadow p-4 lg:w-140">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-center">VASCO 1 X 3 FERROVIÁRIA</p>
                        </div>
                        <p className="text-xs mt-2">⚽ Rayssa Neres 50'</p>
                        <p className="text-xs">⚽ Nathália Thalia 3' | Millene 56' | Duda Santos 90+1'</p>
                        <p className="text-[#d1d1d1] text-xs mt-1">Encerrado</p>
                    </div>


                    <div className="bg-white w-90 flexjustify-center rounded-lg lg:w-140 lg:h-80">
                        <img
                            src={noticia3}
                            alt="Brasil encara a Espanha nas quartas"
                            className="w-85 h-40 object-cover ml-2.5 mt-2 rounded-lg lg:w-135"
                        />
                        <div className="p-3">
                            <p className="text-black text-sm">
                                Governo envia à Câmara dos Deputados PL do Futebol Feminino; entenda a proposta
                            </p>
                            <a target="_blank" href="https://www.lance.com.br/futebol-feminino/governo-encaminha-pl-futebol-feminino-camara-deputados.html"><span className="text-blue-700 text-xs font-bold">Lance!</span></a>
                        </div>
                    </div>
                    <h3 className="text-center">Carregando...</h3>
                </div>
            </div>

            {/*Conteúdo das página */}
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
                            <p className="mt-2.5 ml-1 font-bold">Home</p>
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
