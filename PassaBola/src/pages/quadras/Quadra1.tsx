import { useState, useEffect } from "react";
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
  // Coordenadas visuais das bolinhas (ordem importa)
  const posicoesQuadra = [
    { row: 1, col: 3, fixa: jogadora8 },                 // índice 0
    { row: 2, col: 1 }, { row: 2, col: 2 }, { row: 2, col: 4 }, { row: 2, col: 5, fixa: jogadora1 }, // 1-4
    { row: 3, col: 3 },                                   // 5
    { row: 4, col: 2 }, { row: 4, col: 4 },               // 6-7
    { row: 5, col: 1, fixa: jogadora6 }, { row: 5, col: 3 }, { row: 5, col: 5 }, // 8-10
    { row: 6, col: 1 }, { row: 6, col: 3 }, { row: 6, col: 5, fixa: jogadora2 }, // 11-13
    { row: 7, col: 2, fixa: jogadora7 }, { row: 7, col: 4 }, // 14-15
    { row: 8, col: 3 },                                     // 16
    { row: 9, col: 1 }, { row: 9, col: 2 }, { row: 9, col: 4 }, { row: 9, col: 5 }, // 17-20
    { row: 10, col: 3 },                                   // 21
  ];

  // Estado das posições: mesmo tamanho de posicoesQuadra
  const [posicoes, setPosicoes] = useState<(string | null)[]>(
    () => Array(posicoesQuadra.length).fill(null)
  );

  // Banco de reservas (nomes)
  const [reservas, setReservas] = useState<string[]>([
    "Ana Luisa Carvalho",
    "Andressa Guastaferro",
    "Fernanda Julião",
  ]);

  // Jogadora logada
  const [jogadora, setJogadora] = useState<{ nome: string; foto: string } | null>(
    null
  );

  useEffect(() => {
    const dados = localStorage.getItem("jogadoraLogada");
    if (dados) {
      try {
        setJogadora(JSON.parse(dados));
      } catch {
        // ignore parse error
      }
    }
  }, []);

  // Clicar em posição: adiciona/remova a foto da jogadora logada
  const handlePosicaoClick = (index: number) => {
    if (!jogadora) return alert("Nenhuma jogadora logada!");
    setPosicoes((antigo) => {
      const novo = [...antigo];

      // Se já estiver nessa posição (pela mesma foto) -> remove
      if (novo[index] === jogadora.foto) {
        novo[index] = null;
      } else {
        // Se a jogadora já estiver em outra posição, remove primeiro dela
        for (let i = 0; i < novo.length; i++) {
          if (novo[i] === jogadora.foto) novo[i] = null;
        }
        // colocar foto na posição clicada (se a posição não for fixa)
        novo[index] = jogadora.foto;
      }
      return novo;
    });

    // se ela estava no banco, remove do banco ao entrar na quadra
    if (jogadora && reservas.includes(jogadora.nome)) {
      setReservas((r) => r.filter((n) => n !== jogadora.nome));
    }
  };

  // Enviar ou remover do banco
  const handleIrParaBanco = () => {
    if (!jogadora) return alert("Nenhuma jogadora logada!");
    const nome = jogadora.nome;
    setReservas((lista) => {
      if (lista.includes(nome)) {
        // Se já estiver no banco, remove do banco (sai do banco)
        return lista.filter((n) => n !== nome);
      } else {
        // Remove da quadra e adiciona ao banco
        setPosicoes((p) => p.map((foto) => (foto === jogadora.foto ? null : foto)));
        return [...lista, nome];
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white">
      <div className="h-20" />

      <div className="flex justify-center">
        <div className="bg-black w-90 p-4 rounded-lg lg:w-auto lg:flex lg:gap-8">
          {/* QUADRA */}
          <div className="flex justify-center">
            <div
              className="grid grid-cols-5 grid-rows-10 w-92 h-103 lg:h-115 bg-cover"
              style={{ backgroundImage: `url(${quadra1})` }}
            >
              {posicoesQuadra.map((p, index) => {
                // uso de style para posicionamento exato da grid (evita classes dinâmicas do Tailwind)
                const style: React.CSSProperties = {
                  gridRow: p.row,
                  gridColumn: p.col,
                };

                const isFixa = !!(p as any).fixa;
                const fotoNaPosicao = posicoes[index];

                return (
                  <div
                    key={index}
                    style={style}
                    className="flex items-center justify-center"
                  >
                    <div
                      onClick={() => !isFixa && handlePosicaoClick(index)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer overflow-hidden ${
                        isFixa ? "" : "bg-red-700 hover:bg-red-800"
                      }`}
                    >
                      {/* se for posição fixa, mostra imagem fixa */}
                      {isFixa ? (
                        <img src={(p as any).fixa} alt={`fixa-${index}`} className="w-8 h-8 rounded-full" />
                      ) : fotoNaPosicao ? (
                        <img src={fotoNaPosicao} alt="jogadora" className="w-8 h-8 rounded-full" />
                      ) : (
                        <span className="text-white text-xs">+</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BANCO */}
          <div>
            <div className="justify-center flex mt-5 lg:mt-0">
              <div className="bg-white w-88 h-47 rounded-lg">
                <p className="text-black text-center font-bold">Banco de reservas</p>
                <p className="text-black ml-3 font-bold">Lista de reservas:</p>
                <div className="h-0.5 w-77 justify-center flex bg-[#cecece] ml-3"></div>
                <ul className="text-black ml-5">
                  {reservas.map((nome, i) => (
                    <li key={i}>
                      {nome}
                      <div className="h-0.5 w-75 justify-center flex bg-[#f1f1f1]" />
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <button
                    onClick={handleIrParaBanco}
                    className="mt-2 text-black bg-[#dbdbdb] hover:bg-[#c5c5c5] w-27 rounded-lg text-center"
                  >
                    {jogadora && reservas.includes(jogadora.nome) ? "Sair do banco" : "Ir para banco"}
                  </button>
                </div>
              </div>
            </div>
            <div className="justify-center flex mt-5">
              <div className="bg-green-500 w-60 h-8 rounded-lg hover:bg-green-700">
                <p className="text-center">Completar com time já pronto</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER E MENU LATERAL */}
      <div className="h-10 lg:hidden" />
      <footer className="fixed bottom-0 w-full bg-[#000000] z-2 lg:hidden">
        <div className="w-full h-0.5 bg-[#ec4d9d]" />
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
