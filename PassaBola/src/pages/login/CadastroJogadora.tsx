import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POSICOES, carregarJogadoras, salvarJogadoras } from "../../data/jogadoras";
import type { Jogadora } from "../../data/jogadoras";
import { v4 as uuidv4 } from "uuid";
import wallpaper from "../../imgs/Cadastro2.png";

export default function CadastroJogadora() {
  const [nome, setNome] = useState("");
  const [nome_usu, setNome_usu] = useState("");
  const [idade, setIdade] = useState<number | "">("");
  const [posicao, setPosicao] = useState("");
  const [foto, setFoto] = useState<string | null>(null);
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setFoto(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSalvar = () => {
    if (!nome || !idade || !posicao || !email || !senha || !nome_usu) {
      setMensagem("⚠️ Preencha todos os campos obrigatórios!");
      return;
    }

    const novaJogadora: Jogadora = {
      id: uuidv4(),
      nome,
      nome_usu,
      idade: Number(idade),
      posicao,
      foto: foto || "",
      time,
      email,
      senha,
    };

    const jogadoras = carregarJogadoras();
    salvarJogadoras([...jogadoras, novaJogadora]);

    setMensagem("✅ Jogadora cadastrada com sucesso! Redirecionando...");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">
        Cadastrar Nova Jogadora
      </h1>

      <div className="flex flex-col gap-4 w-80 bg-black bg-opacity-80 p-6 rounded-2xl shadow-lg lg:w-[700px]">
        <div className="lg:flex lg:flex-wrap lg:gap-4">
          {/* Coluna Esquerda */}
          <div className="flex-1 flex flex-col gap-3 text-white">
            <label className="text-sm">
              Nome:
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                type="text"
                placeholder="Digite seu nome"
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </label>

            <label className="text-sm">
              Nome de usuária:
              <input
                value={nome_usu}
                onChange={(e) => setNome_usu(e.target.value)}
                type="text"
                placeholder="ex: @marta1234"
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </label>

            <label className="text-sm">
              Idade:
              <input
                value={idade}
                onChange={(e) => setIdade(Number(e.target.value))}
                type="number"
                placeholder="Digite sua idade"
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </label>

            <label className="text-sm">
              Posição:
              <select
                value={posicao}
                onChange={(e) => setPosicao(e.target.value)}
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none"
              >
                <option value="">Selecione...</option>
                {POSICOES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm">
              Time do coração:
              <input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="text"
                placeholder="Digite seu time do coração"
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </label>
          </div>

          {/* Coluna Direita */}
          <div className="flex-1 flex flex-col gap-3 mt-4 lg:mt-0 text-white">
            <label className="text-sm">
              Email:
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Digite seu email"
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </label>

            <label className="text-sm">
              Senha:
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                placeholder="Digite uma senha"
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </label>

            {/* Upload estilizado */}
            <div className="flex flex-col items-center mt-3">
              <p className="mb-1 text-sm">Foto de Perfil</p>

              <label htmlFor="foto-upload" className="relative cursor-pointer group">
                <div className="w-28 h-28 rounded-full bg-[#2e2e2e] flex items-center justify-center overflow-hidden border-2 border-pink-500 group-hover:border-pink-400 transition">
                  {foto ? (
                    <img
                      src={foto}
                      alt="Pré-visualização"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-gray-400 group-hover:text-pink-400 transition"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c.942 0 1.833-.382 2.475-1.025A3.5 3.5 0 0012 6.5c-.942 0-1.833.382-2.475 1.025A3.5 3.5 0 0012 11zm0 0v8m-6 0h12"
                      />
                    </svg>
                  )}

                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7h4l1-2h8l1 2h4v13H3V7z"
                      />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </div>
                </div>
              </label>

              <input
                id="foto-upload"
                type="file"
                accept="image/*"
                onChange={handleFotoChange}
                className="hidden"
              />

              <p className="text-xs text-gray-400 mt-1">
                Clique para selecionar uma foto
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleSalvar}
          className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition hover:scale-105"
        >
          Salvar Jogadora
        </button>

        {mensagem && (
          <p className="text-center text-sm mt-2 text-white">{mensagem}</p>
        )}
      </div>
    </div>
  );
}
