import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Quadra {
  nome: string;
  cidade: string;
  preco: string;
  descricao: string;
  imagem: string;
  avaliacao: number;
}

const quadras: Quadra[] = [
  {
    nome: "Arena Passa a Bola",
    cidade: "São Paulo - SP",
    preco: "R$ 80/h",
    descricao:
      "Quadra sintética com iluminação noturna, vestiários e estacionamento. Aluguel por hora com descontos para agendamentos frequentes.",
    imagem: "https://passaabola.com.br/img/logos/passa_a_bola.jpg",
    avaliacao: 4.7,
  },
  {
    nome: "Centro Esportivo Maré Alta",
    cidade: "Rio de Janeiro - RJ",
    preco: "R$ 60/h",
    descricao:
      "Quadra coberta, piso emborrachado, ótima para treinos com chuva. Possui escolinha e locação de equipamentos.",
    imagem: "https://clubemarealta.com.br/img/venue-gallery/3.jpg",
    avaliacao: 4.4,
  },
  {
    nome: "Arena Feminina Vila Verde",
    cidade: "Belo Horizonte - MG",
    preco: "R$ 100/h",
    descricao:
      "Quadra premium com aquecimento, área VIP e tecnologia de monitoramento. Ideal para jogos e campeonatos.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyiuYxCsePG0z__emim6MOJbvx5uAHBw2vzw&s",
    avaliacao: 4.9,
  },
  {
    nome: "Arena Pôr do Sol",
    cidade: "Florianópolis - SC",
    preco: "R$ 70/h",
    descricao:
      "Quadra de areia à beira-mar, perfeita para futevôlei e treinos funcionais. Estrutura com bar e chuveiros.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_lQQJQTQViE43mjuB9myXyPfjwodA-6RHug&s",
    avaliacao: 4.6,
  },
];

export default function QuadrasParceiras() {
  const [navHeight, setNavHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const navbar = document.querySelector("nav") as HTMLElement;
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavHeight(height);
    }
  }, []);
    
  return (
    <div
      ref={contentRef}
      className="min-h-screen bg-gradient-to-b from-[#0b1020] to-[#21102a] text-white px-4 pb-12 overflow-y-auto"
      style={{ paddingTop: `${navHeight + 40}px` }}
    >
      <div className="max-w-7xl mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:opacity-90 transition font-semibold"
        >
          ← Voltar
        </button>

        <h1 className="text-3xl font-bold text-center mb-6">
          Quadras Parceiras ⚽
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Encontre e reserve quadras próximas
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {quadras.map((quadra, index) => (
            <div
              key={index}
              className="bg-[#12182d] rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02]"
            >
              <img
                src={quadra.imagem}
                alt={quadra.nome}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold text-lg">{quadra.nome}</h2>
                  <span className="text-sm text-gray-400">{quadra.preco}</span>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-400 text-lg">⭐</span>
                  <span className="text-white text-sm">
                    {quadra.avaliacao.toFixed(1)}
                  </span>
                </div>

                <p className="text-sm text-gray-300 mb-4">{quadra.descricao}</p>
                <p className="text-xs text-gray-500 mb-3">{quadra.cidade}</p>

                <div className="flex justify-between">
                  <button className="border border-pink-500 text-white px-4 py-2 rounded-lg bg-black hover:bg-pink-500 hover:text-black transition">
                    Ver detalhes
                  </button>
                  <button className="border border-pink-500 text-white px-4 py-2 rounded-lg bg-black hover:bg-pink-500 hover:text-black transition">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
