// src/pages/home/Home.tsx

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* HEADER */}
      <header className="w-full bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-xl font-bold">MeuSite</h1>

          {/* Menu */}
          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-gray-300 transition">
              Início
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Sobre
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO CENTRAL */}
      <main className="flex-grow flex items-center justify-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Bem-vindo à Home!
        </h2>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-gray-800 py-6 mt-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} MeuSite. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
