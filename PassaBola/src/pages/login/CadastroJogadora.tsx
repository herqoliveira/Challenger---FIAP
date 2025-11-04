import { useState } from "react";
import { POSICOES, carregarJogadoras, salvarJogadoras } from "../../data/jogadoras";
import type { Jogadora } from "../../data/jogadoras";

import { v4 as uuidv4 } from "uuid"; // para gerar IDs únicos

export default function CadastroJogadora() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState<number | "">("");
  const [posicao, setPosicao] = useState("");
  const [foto, setFoto] = useState<string | null>(null);
  const [mensagem, setMensagem] = useState("");

  // Função para lidar com upload da imagem
  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setFoto(reader.result as string);
    reader.readAsDataURL(file);
  };

  // Função para salvar jogadora
  const handleSalvar = () => {
    if (!nome || !idade || !posicao) {
      setMensagem("⚠️ Preencha todos os campos obrigatórios!");
      return;
    }

    const novaJogadora: Jogadora = {
      id: uuidv4(),
      nome,
      idade: Number(idade),
      posicao,
      foto: foto || "",
    };

    const jogadoras = carregarJogadoras();
    salvarJogadoras([...jogadoras, novaJogadora]);

    setMensagem("✅ Jogadora cadastrada com sucesso!");
    setNome("");
    setIdade("");
    setPosicao("");
    setFoto(null);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">Cadastrar Nova Jogadora</h1>

      <div className="flex flex-col gap-4 w-80 bg-black p-6 rounded-2xl shadow-lg">
        <label>
          Nome:
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            className="w-full mt-1 p-2 rounded bg-gray-800 text-white"
          />
        </label>

        <label>
          Idade:
          <input
            value={idade}
            onChange={(e) => setIdade(Number(e.target.value))}
            type="number"
            className="w-full mt-1 p-2 rounded bg-gray-800 text-white"
          />
        </label>

        <label>
          Posição:
          <select
            value={posicao}
            onChange={(e) => setPosicao(e.target.value)}
            className="w-full mt-1 p-2 rounded bg-gray-800 text-white"
          >
            <option value="">Selecione...</option>
            {POSICOES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>

        <label>
          Foto de perfil:
          <input
            type="file"
            accept="image/*"
            onChange={handleFotoChange}
            className="w-full mt-1 text-sm"
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
          className="bg-pink-600 hover:bg-pink-700 transition-all p-2 rounded font-bold"
        >
          Salvar Jogadora
        </button>

        {mensagem && <p className="text-center text-sm mt-2">{mensagem}</p>}
      </div>
    </div>
  );
}
