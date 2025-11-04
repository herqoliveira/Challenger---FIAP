import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POSICOES, carregarJogadoras, salvarJogadoras } from "../../data/jogadoras";
import type { Jogadora } from "../../data/jogadoras";
import { v4 as uuidv4 } from "uuid";
import wallpaper from "../../imgs/cadastro.jpg";
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
    <div className="h-full flex flex-col items-center py-10 bg-cover " style={{ backgroundImage: `url(${wallpaper})` }}>
      <h1 className="text-2xl font-bold mb-6 text-white">Cadastrar Nova Jogadora</h1>

      <div className="flex flex-col gap-4 w-80 bg-black p-6 rounded-2xl shadow-lg lg:w-175">
        <div className="lg:flex lg:flex-wrap">
          <div className="lg:w-80 text-white">
            <label>
              Nome:
              <br />
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                type="text"
                placeholder="Digite seu nome"
                className="w-68 mt-1 p-2 rounded bg-[#2e2e2e] text-white"
              />
            </label>
            <br />
            <label>
              Nome de usuária:
              <input
                value={nome_usu}
                onChange={(e) => setNome_usu(e.target.value)}
                type="text"
                placeholder="ex: @marta1234"
                className="w-68 mt-1 p-2 rounded bg-[#2e2e2e] text-white"
              />
            </label>
            <br />
            <label>
              Idade:
              <br />
              <input
                value={idade}
                onChange={(e) => setIdade(Number(e.target.value))}
                type="number"
                placeholder="Digite sua idade"
                className="w-68 mt-1 p-2 rounded bg-[#2e2e2e] text-white"
              />
            </label>

            <label>
              Posição:
              <br />
              <select
                value={posicao}
                onChange={(e) => setPosicao(e.target.value)}
                className="w-68 mt-1 p-2 rounded bg-[#2e2e2e] text-white"
              >
                <option value="">Selecione...</option>
                {POSICOES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Time do coração:
              <br />
              <input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="text"
                placeholder="Digite seu time do coração"
                className="w-68 mt-1 p-2 rounded bg-[#2e2e2e] text-white"
              />
            </label>
            <br />
          </div>
          <div className="lg:w-80 text-white">
            <label>
              Email:
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Digite seu email"
                className="w-68 mt-1 p-2 rounded bg-[#2e2e2e] text-white"
              />
            </label>
            <br />
            <label>
              Senha:
              <br />
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                placeholder="Digite uma senha"
                className="w-68 mt-1 p-2 rounded bg-[#2e2e2e] text-white"
              />
            </label>
            <br />
            <div className="h-0.5 w-68 bg-gray-900 mt-3 mb-2 "></div>
            <label>
              Foto de perfil:
              <br />
              <input
                type="file"
                accept="image/*"
                onChange={handleFotoChange}
                className="w-68 mt-1 text-sm"
              />
            </label>

            {foto && (
              <img
                src={foto}
                alt="Pré-visualização"
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
            )}

            <button
              onClick={handleSalvar}
              className="bg-pink-600 hover:bg-pink-700 transition-all p-2 rounded font-bold mt-1 text-white"
            >
              Salvar Jogadora
            </button>

            {mensagem && <p className="text-center text-sm mt-2">{mensagem}</p>}
          </div>
        </div>


      </div>
    </div>
  );
}
