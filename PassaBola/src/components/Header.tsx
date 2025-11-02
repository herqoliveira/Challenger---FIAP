import { Link } from "react-router-dom";
import logo from "../imgs/logopassabola.png";

export default function Header() {
    return (
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

    );
}
