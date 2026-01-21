
import React, { useState } from 'react';
import { Subject, ModuleFormData } from '../types';

interface ModuleFormProps {
  onGenerate: (data: ModuleFormData) => void;
  isLoading: boolean;
}

const subjects: Subject[] = [
  'Matematika', 'Bahasa Indonesia', 'IPAS', 'Pendidikan Pancasila', 
  'Seni Budaya', 'PJOK', 'Bahasa Inggris', 'Pendidikan Agama Kristen', 'TIK'
];

const learningModels = [
  'Auto (Ditentukan AI)', 'Problem Based Learning (PBL)', 'Project Based Learning (PjBL)', 
  'Discovery Learning', 'Inquiry Learning', 'Direct Instruction', 'Cooperative Learning'
];

const durationOptions = [
  '2 JP (2 x 35 Menit)',
  '3 JP (3 x 35 Menit)',
  '4 JP (4 x 35 Menit)',
  '5 JP (5 x 35 Menit)',
  '6 JP (6 x 35 Menit)',
  'Sesuai Kebutuhan Materi'
];

const meetingOptions = [
  '1 Pertemuan',
  '2 Pertemuan',
  '3 Pertemuan',
  '4 Pertemuan',
  'Sesuai Kebutuhan Materi'
];

const ModuleForm: React.FC<ModuleFormProps> = ({ onGenerate, isLoading }) => {
  const [formData, setFormData] = useState<ModuleFormData>({
    teacherName: '',
    schoolName: '',
    subject: 'Matematika',
    grade: '1',
    topic: '',
    duration: '2 JP (2 x 35 Menit)',
    meetingCount: '1 Pertemuan',
    learningModel: 'Auto (Ditentukan AI)',
    learningObjectives: '',
    additionalContext: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.topic || !formData.teacherName) return;
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nama Guru</label>
          <input 
            type="text" 
            placeholder="Contoh: Budi Santoso, S.Pd"
            value={formData.teacherName}
            onChange={(e) => setFormData({...formData, teacherName: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nama Sekolah</label>
          <input 
            type="text" 
            placeholder="Contoh: SD Kristen Cahaya"
            value={formData.schoolName}
            onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mata Pelajaran</label>
          <select 
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value as Subject})}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm cursor-pointer"
          >
            {subjects.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Kelas (Fase)</label>
          <select 
            value={formData.grade}
            onChange={(e) => setFormData({...formData, grade: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm cursor-pointer"
          >
            <option value="1">Kelas 1 (Fase A)</option>
            <option value="2">Kelas 2 (Fase A)</option>
            <option value="3">Kelas 3 (Fase B)</option>
            <option value="4">Kelas 4 (Fase B)</option>
            <option value="5">Kelas 5 (Fase C)</option>
            <option value="6">Kelas 6 (Fase C)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Alokasi Waktu</label>
          <select 
            value={formData.duration}
            onChange={(e) => setFormData({...formData, duration: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm cursor-pointer"
          >
            {durationOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Jumlah Pertemuan</label>
          <select 
            value={formData.meetingCount}
            onChange={(e) => setFormData({...formData, meetingCount: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm cursor-pointer"
          >
            {meetingOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Model Pembelajaran</label>
        <select 
          value={formData.learningModel}
          onChange={(e) => setFormData({...formData, learningModel: e.target.value})}
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm cursor-pointer"
        >
          {learningModels.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Topik Utama</label>
        <input 
          type="text" 
          placeholder="Contoh: Ekosistem, Pecahan, atau Dasar Coding"
          value={formData.topic}
          onChange={(e) => setFormData({...formData, topic: e.target.value})}
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
          required
        />
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className={`w-full py-3 px-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
          isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98]'
        }`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Menyusun Modul Lengkap...
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            Buat Modul & LKPD
          </>
        )}
      </button>
    </form>
  );
};

export default ModuleForm;
