
import React from 'react';
import { LessonModule } from '../types';

interface ModuleDisplayProps {
  module: LessonModule;
}

const ModuleDisplay: React.FC<ModuleDisplayProps> = ({ module }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header for Screen */}
      <div className="bg-slate-900 px-8 py-10 text-white no-print flex justify-between items-start">
        <div>
          <div className="inline-block px-3 py-1 bg-indigo-500 rounded text-xs font-bold uppercase tracking-wider mb-4">Modul Ajar Alkitabiah</div>
          <h2 className="text-3xl font-bold mb-2">{module.title}</h2>
          <p className="text-slate-400">Model: {module.learningModel} • {module.meetingCount}</p>
        </div>
        <button 
          onClick={handlePrint}
          className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors border border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
          Cetak Modul & LKPD
        </button>
      </div>

      <div className="p-8 space-y-12 bg-white print:p-0 print:text-black">
        {/* Formal Header (Print Only) */}
        <div className="hidden print:block border-b-4 border-double border-black pb-4 mb-8 text-center">
          <h1 className="text-2xl font-black uppercase mb-1">Modul Ajar Kurikulum Merdeka</h1>
          <h2 className="text-xl font-bold mb-2">{module.schoolName}</h2>
          <p className="text-sm font-medium">Tahun Ajaran 2024/2025</p>
        </div>

        {/* Identity Section */}
        <section>
          <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-full text-sm">1</span>
            Identitas Modul
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl print:bg-transparent print:p-0">
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Penyusun</p>
              <p className="font-semibold">{module.teacherName}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Mata Pelajaran</p>
              <p className="font-semibold">{module.subject}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Kelas / Fase</p>
              <p className="font-semibold">Kelas {module.grade}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Alokasi Waktu</p>
              <p className="font-semibold">{module.duration}</p>
            </div>
          </div>
        </section>

        {/* Biblical Worldview Section */}
        <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 print:bg-slate-50 print:border-slate-300">
          <h3 className="text-lg font-bold text-indigo-900 border-b border-indigo-200 pb-2 mb-4 flex items-center gap-2 print:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 print:text-black"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            Perspektif Alkitabiah (Biblical Worldview)
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 print:border-slate-300">
              <p className="text-sm font-bold text-indigo-800 mb-1 print:text-black">Landasan Firman:</p>
              <p className="text-slate-700 italic">"{module.biblicalWorldview.verse}"</p>
            </div>
            <div>
              <p className="text-sm font-bold text-indigo-800 mb-1 print:text-black">Koneksi Kebenaran:</p>
              <p className="text-slate-700">{module.biblicalWorldview.connection}</p>
            </div>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full print:bg-black">Prinsip: {module.biblicalWorldview.keyPrinciple}</span>
            </div>
          </div>
        </section>

        {/* Learning Model & Goals */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Model Pembelajaran</h4>
            <div className="px-4 py-2 bg-slate-100 rounded-lg font-medium text-indigo-700 print:text-black print:bg-transparent print:border">
              {module.learningModel}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Tujuan Pembelajaran</h4>
            <ul className="list-disc ml-5 space-y-1 text-slate-700">
              {module.learningObjectives.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
          </div>
        </section>

        {/* Activities */}
        <section>
          <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-6 flex items-center gap-2">
             <span className="w-8 h-8 bg-slate-100 text-slate-700 flex items-center justify-center rounded-full text-sm">2</span>
             Langkah Pembelajaran (Skenario)
          </h3>
          
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-indigo-600 rounded-full print:border-black"></div>
              <h4 className="font-bold text-indigo-700 mb-3 print:text-black">I. Pembukaan & Doa</h4>
              <ul className="space-y-2">
                {module.activities.opening.map((act, i) => (
                  <li key={i} className="text-slate-700 flex gap-2">
                    <span className="text-slate-400 font-medium">{i+1}.</span> {act}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-indigo-600 rounded-full print:border-black"></div>
              <h4 className="font-bold text-indigo-700 mb-3 print:text-black">II. Kegiatan Inti ({module.learningModel})</h4>
              <ul className="space-y-3">
                {module.activities.core.map((act, i) => (
                  <li key={i} className="text-slate-700 flex gap-2">
                    <span className="text-slate-400 font-medium">{i+1}.</span> {act}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-indigo-600 rounded-full print:border-black"></div>
              <h4 className="font-bold text-indigo-700 mb-3 print:text-black">III. Penutup & Evaluasi Alkitabiah</h4>
              <ul className="space-y-2">
                {module.activities.closing.map((act, i) => (
                  <li key={i} className="text-slate-700 flex gap-2">
                    <span className="text-slate-400 font-medium">{i+1}.</span> {act}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment & Rubric */}
        <section className="break-before-page">
          <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-6 flex items-center gap-2">
             <span className="w-8 h-8 bg-slate-100 text-slate-700 flex items-center justify-center rounded-full text-sm">3</span>
             Asesmen & Rubrik Penilaian
          </h3>
          <div className="mb-4 p-4 bg-slate-50 border border-slate-200 rounded-xl italic text-slate-600">
            {module.assessment.method}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300 text-sm">
              <thead className="bg-slate-100 print:bg-transparent">
                <tr>
                  <th className="border border-slate-300 p-2 text-left">Kriteria</th>
                  <th className="border border-slate-300 p-2 text-left">Sangat Baik</th>
                  <th className="border border-slate-300 p-2 text-left">Baik</th>
                  <th className="border border-slate-300 p-2 text-left">Perlu Bimbingan</th>
                </tr>
              </thead>
              <tbody>
                {module.assessment.scoringRubric.map((item, i) => (
                  <tr key={i}>
                    <td className="border border-slate-300 p-2 font-bold bg-slate-50 print:bg-transparent">{item.criteria}</td>
                    <td className="border border-slate-300 p-2 text-slate-700">{item.excellent}</td>
                    <td className="border border-slate-300 p-2 text-slate-700">{item.good}</td>
                    <td className="border border-slate-300 p-2 text-slate-700">{item.needsImprovement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* LKPD Attachment (New Section) */}
        <section className="break-before-page pt-12 border-t-4 border-slate-900">
          <div className="border-4 border-slate-900 p-8 rounded-lg bg-white">
            <div className="flex justify-between items-center border-b-2 border-slate-900 pb-4 mb-6">
              <h2 className="text-2xl font-black uppercase">Lampiran: LKPD</h2>
              <div className="text-right text-xs">
                <p>Nama: ____________________</p>
                <p className="mt-2">Kelas: ____________________</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-center underline decoration-2">{module.worksheet.title}</h3>
            
            <div className="mb-8">
              <p className="font-bold mb-2">Instruksi Pengerjaan:</p>
              <p className="text-slate-800 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                {module.worksheet.instructions}
              </p>
            </div>

            <div className="space-y-6">
              {module.worksheet.tasks.map((task, i) => (
                <div key={i} className="space-y-2">
                  <p className="font-bold">{i+1}. {task}</p>
                  <div className="h-24 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50/50"></div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center border-t pt-4 italic text-slate-500 text-sm">
              "Apapun juga yang kamu perbuat, perbuatlah dengan segenap hatimu seperti untuk Tuhan dan bukan untuk manusia." - Kolose 3:23
            </div>
          </div>
        </section>
      </div>

      <div className="bg-slate-100 p-4 text-center text-xs text-slate-500 border-t print:hidden no-print">
        Dihasilkan oleh GuruAI pada {new Date(module.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
      </div>
    </div>
  );
};

export default ModuleDisplay;
