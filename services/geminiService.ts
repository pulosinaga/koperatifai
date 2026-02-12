import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// AI Strategic Assistant for KoperatifAI
export const getFinancialAdvice = async (prompt: string): Promise<string> => {
  if (!navigator.onLine) {
    return "⚠️ **Koneksi Terputus.** Pastikan Bapak terhubung ke internet.";
  }

  // Langsung inisialisasi agar sistem injeksi API_KEY otomatis bekerja sempurna
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', // Flash untuk kecepatan maksimal di jaringan mobile
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah CHIEF MONETIZATION OFFICER KoperatifAI. 
        Tugas Anda: Memberikan strategi MENGHASILKAN UANG dari ide koperasi online.
        
        WAJIB BERIKAN ANGKA (Rp):
        1. Biaya Admin Transaksi: Rp 500 - 1.000 per belanja anggota di marketplace.
        2. Biaya Admin PPOB: Rp 1.500 - 2.500 per bayar listrik/pulsa.
        3. Royalti IP Founder: Rp 100 per klik aktivitas di aplikasi.
        4. Margin Sembako: Ambil untung Rp 200 - 500 dari pengadaan beras/minyak kolektif.
        
        FORMAT JAWABAN:
        - Gunakan TABEL untuk perbandingan untung.
        - Gunakan POIN untuk langkah kerja.
        - Jangan berbasa-basi. Langsung ke strategi cuan.
        - Gunakan Bahasa Indonesia yang berwibawa namun praktis.`,
        thinkingConfig: { thinkingBudget: 0 }, // Respon instan tanpa jeda
      },
    });

    return response.text || "AI sedang menyinkronkan data, mohon klik kirim ulang sekali lagi, Pak.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "❌ **Sinkronisasi Otak AI Sedang Sibuk.** Mohon Bapak klik tombol kirim ulang pada tombol pertanyaan di bawah.";
  }
};

export const getBusinessIdeas = async (category: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Berikan 3 ide bisnis online cepat untuk kategori: ${category} di koperasi.`,
    });
    return response.text || "Memproses ide...";
  } catch (e) {
    return "Sedang memikirkan ide...";
  }
};

export const getFriendlyReminder = async (userName: string, taskType: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Buatkan pengingat ramah untuk ${userName} tentang ${taskType}.`,
    });
    return response.text || `Halo ${userName}, jangan lupa ${taskType} Anda.`;
  } catch (e) {
    return `Halo ${userName}, mari cek kewajiban kita hari ini.`;
  }
};