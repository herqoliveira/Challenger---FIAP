import { useState } from "react";
import { Link } from "react-router-dom";
import { carregarJogadoras } from "../../data/jogadoras";
import logo from "../../imgs/logopassabola.png";
import wallpaper from "../../imgs/fundo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [logado, setLogado] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const jogadoras = carregarJogadoras();
    const jogadora = jogadoras.find(
      (j) => j.email === email && j.senha === senha
    );

    if (jogadora) {
      setLogado(true);
      setErro(false);
      localStorage.setItem("jogadoraLogada", JSON.stringify(jogadora));
    } else {
      setErro(true);
      setLogado(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col text-white bg-cover"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="h-20"></div>

      <div className="flex justify-center">
        <div className="bg-black w-90 h-90 rounded-lg p-4 flex flex-col items-center lg:ml-145 mt-10">
          <img src={logo} alt="" className="w-15 h-15 mb-4" />
          <p className="text-center mb-2">Seja bem-vinda ao Passa Bola</p>
          <div className="h-0.5 w-80 bg-gray-900"></div>

          {!logado ? (
            <form onSubmit={handleLogin} className="flex flex-col w-full items-center">
              <p className="m-1">Email:</p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 p-2 w-64 rounded text-white bg-[#2e2e2e]"
                required
              />
              <p className="m-1">Senha:</p>
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="mb-2 p-2 w-64 rounded text-white bg-[#2e2e2e]"
                required
              />
              {erro && <p className="text-red-500 mb-2">Email ou senha incorretos</p>}
              <button
                type="submit"
                className="bg-[#ec4d9d] hover:bg-[#c54384] px-4 py-2 rounded"
              >
                Entrar
              </button>
            </form>
          ) : (
            <Link to="/home">
              <button className="bg-[#ec4d9d] hover:bg-[#c54384] px-4 py-2 rounded mt-4">
                Ir para página principal
              </button>
            </Link>
          )}
        </div>
      </div>

      <div className="h-10 lg:hidden"></div>
    </div>
  );
}
