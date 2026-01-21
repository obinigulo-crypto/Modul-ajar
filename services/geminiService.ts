
import { GoogleGenAI, Type } from "@google/genai";
import { ModuleFormData, LessonModule } from "../types";

export const generateLessonModule = async (data: ModuleFormData): Promise<LessonModule> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const isAutoModel = data.learningModel.includes('Auto');
  const isAutoDuration = data.duration.includes('Sesuai Kebutuhan');
  const isAutoMeeting = data.meetingCount.includes('Sesuai Kebutuhan');

  const prompt = `Buatkan modul ajar lengkap Kurikulum Merdeka untuk guru SD.
  
  DATA GURU & SEKOLAH:
  - Nama Guru: ${data.teacherName}
  - Nama Sekolah: ${data.schoolName}
  - Mata Pelajaran: ${data.subject}
  - Kelas: ${data.grade}
  - Topik: ${data.topic}
  - Alokasi Waktu: ${isAutoDuration ? 'Tentukan sendiri yang paling pas' : data.duration}
  - Jumlah Pertemuan: ${isAutoMeeting ? 'Tentukan sendiri yang paling pas' : data.meetingCount}
  - Model Pembelajaran: ${isAutoModel ? 'Pilih model pembelajaran yang paling inovatif dan efektif (PBL, PjBL, Discovery, dll)' : data.learningModel}

  KRITERIA WAJIB:
  1. Integrasi "Biblical Worldview" (Perspektif Alkitabiah) yang mendalam dan relevan dengan topik.
  2. Langkah pembelajaran yang menarik, interaktif, dan berpusat pada siswa (Opening, Core, Closing). Sertakan detail kegiatan yang konkret.
  3. Bagian Asesmen yang lengkap dengan Rubrik Penilaian (Kriteria, Sangat Baik, Baik, Perlu Bimbingan).
  4. Lampiran Khusus: LKPD (Lembar Kerja Peserta Didik) yang kreatif, menantang, dan sesuai fase perkembangan anak SD.

  Hasil harus dalam format JSON valid:
  {
    "title": "Judul Modul",
    "subject": "${data.subject}",
    "grade": "${data.grade}",
    "topic": "${data.topic}",
    "duration": "Hasil durasi final",
    "meetingCount": "Hasil jumlah pertemuan final",
    "learningModel": "Model yang terpilih",
    "learningObjectives": ["Tujuan 1", "Tujuan 2"],
    "biblicalWorldview": {
      "verse": "Ayat Alkitab",
      "connection": "Penjelasan koneksi alkitabiah",
      "keyPrinciple": "Prinsip Utama"
    },
    "keyConcepts": ["Konsep 1"],
    "essentialQuestions": ["Pertanyaan 1"],
    "activities": {
      "opening": ["Detail kegiatan pembukaan yang menarik"],
      "core": ["Detail langkah inti yang interaktif sesuai model pembelajaran"],
      "closing": ["Detail penutup dan refleksi alkitabiah"]
    },
    "assessment": {
      "method": "Penjelasan metode asesmen",
      "scoringRubric": [
        { "criteria": "Nama Kriteria", "excellent": "Deskripsi", "good": "Deskripsi", "needsImprovement": "Deskripsi" }
      ]
    },
    "worksheet": {
      "title": "Judul LKPD",
      "instructions": "Instruksi pengerjaan yang ramah anak",
      "tasks": ["Tugas/Soal 1", "Tugas/Soal 2", "Tugas/Soal 3"]
    },
    "materials": ["Alat/Bahan"]
  }`;

  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      thinkingConfig: { thinkingBudget: 4000 }
    },
  });

  const rawJson = response.text.trim();
  const parsedData = JSON.parse(rawJson);
  
  return {
    ...parsedData,
    id: crypto.randomUUID(),
    teacherName: data.teacherName,
    schoolName: data.schoolName,
    createdAt: Date.now()
  };
};
