import logo from "../../imgs/logopassabola.png";
import casa from "../../imgs/home.png";

export default function Home() {
    return (
    <div className="min-h-screen flex flex-col bg-black text-white">
        <header className="w-full shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <div className="w-12" />

                <div className="flex-grow max-w-md mx-6">
                    <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-400"
                    />
                </div>

                <img
                    src={logo}
                    alt="Logo"
                    className="h-12 w-12 object-contain"
                />

            </div>
            <div className="w-full h-1 bg-[#439151]"></div>
        </header>
        
        <footer>
            <div className="w-full h-1 bg-[#439151]"></div>
            <div className="flex gap-5">
                <img src={casa} alt="" />
            </div>
        </footer>

    </div>
    );
}
