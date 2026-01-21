
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              GuruAI <span className="text-indigo-600 font-normal">| Modul Alkitabiah</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 py-5">Generator</a>
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 py-5">Koleksi Saya</a>
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 py-5">Bantuan</a>
          </nav>
          <div>
             <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
               Profil Guru
             </button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-white border-t border-slate-200 py-8 no-print">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">© 2024 GuruAI. Didesain untuk kemuliaan Tuhan dan kemajuan pendidikan Kristen.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
