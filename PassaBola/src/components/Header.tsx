import { Link, useLocation } from "react-router-dom";
import logo from "../imgs/logopassabola.png";
import voltar from "../imgs/voltar.png";
import chat from "../imgs/chat.png";



export default function Header() {

    const location = useLocation();

    // Mapeia as páginas onde o botão "voltar" deve aparecer e para onde ele leva
    const rotasComVoltar: Record<string, string> = {
        "/times": "/config",
        "/buscarpartida": "/config",
        "/chatpv": "/perfil",
        "/chatpv2": "/perfil2",
        "/perfil": "/pesquisa",
        "/perfil2": "/pesquisa",
        "/chat3": "/quadra1",
        "/dashboard": "/perfil3"
    };
    const BotaoChat: Record<string, string> = {
        "/quadra1": "/chat3",
    }

    const destinoVoltar = rotasComVoltar[location.pathname];
    const acessarChat = BotaoChat[location.pathname];

    return (
        <header className="fixed top-0 w-full shadow-md z-2 bg-[#000000]">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {destinoVoltar ? (
                    <Link to={destinoVoltar}>
                        <img
                            src={voltar}
                            alt="Voltar"
                            className="h-8 w-8 object-contain"
                        />
                    </Link>
                ): acessarChat ? (
                    <Link to="/chat3">
                        <img
                            src={chat}
                            alt="chat"
                            className="h-12 w-12 object-contain"
                        />
                    </Link>
                )
                 : (
                    <div className="w-12" />
                )}
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

    );
}
