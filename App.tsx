
import React, { useState } from 'react';
import Layout from './components/Layout';
import ModuleForm from './components/ModuleForm';
import ModuleDisplay from './components/ModuleDisplay';
import { ModuleFormData, LessonModule } from './types';
import { generateLessonModule } from './services/geminiService';

const App: React.FC = () => {
  const [currentModule, setCurrentModule] = useState<LessonModule | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (formData: ModuleFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const module = await generateLessonModule(formData);
      setCurrentModule(module);
      // Optional: scroll to the display
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setError("Gagal menyusun modul. Pastikan koneksi internet stabil atau coba lagi beberapa saat lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-12 no-print">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Rancang Pembelajaran Alkitabiah dengan Cepat.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Bantu siswa SD melihat kebenaran Tuhan di setiap mata pelajaran. Platform AI kami membantu Anda merancang modul ajar Kurikulum Merdeka yang berpusat pada Kristus.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-5 no-print">
            <ModuleForm onGenerate={handleGenerate} isLoading={isLoading} />
            
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                {error}
              </div>
            )}

            <div className="mt-8 p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
               <h4 className="text-sm font-bold text-slate-700 mb-2">Tips untuk Guru:</h4>
               <p className="text-sm text-slate-500 italic">
                 "Semakin spesifik topik yang Anda masukkan, semakin relevan integrasi Alkitabiah yang akan dihasilkan oleh sistem."
               </p>
            </div>
          </div>

          {/* Result Column */}
          <div className="lg:col-span-7">
            {currentModule ? (
              <ModuleDisplay module={currentModule} />
            ) : (
              <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-12 text-center no-print bg-white/50">
                <div className="w-20 h-20 bg-indigo-50 text-indigo-200 flex items-center justify-center rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Belum ada modul terpilih</h3>
                <p className="text-slate-500 max-w-sm">
                  Isi formulir di samping untuk mulai menyusun modul ajar pribadi Anda yang lengkap dengan pandangan Alkitabiah.
                </p>
              </div>
            )}
            
            {isLoading && !currentModule && (
              <div className="h-full min-h-[400px] bg-white border border-slate-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center animate-pulse">
                <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-6"></div>
                <p className="text-slate-600 font-medium">Kecerdasan Buatan sedang menelaah materi dan mencari ayat pendukung...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
