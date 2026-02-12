import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// AI Assistant service for financial advice and business coaching
export const getFinancialAdvice = async (prompt: string): Promise<string> => {
  if (!navigator.onLine) {
    return "⚠️ **Koneksi Terputus.** Sistem kedaulatan memerlukan jalur internet.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah STRATEGI-AI, Co-Founder Tekno untuk KoperatifAI. 
        
        TUGAS ANDA:
        1. Memberikan ide monetisasi (cara menghasilkan uang) yang KONKRIT untuk koperasi kredit.
        2. Format jawaban wajib menggunakan:
           - **Teks Tebal** untuk istilah kunci.
           - Daftar poin (-) atau nomor (1.) untuk langkah-langkah.
           - Paragraf pendek agar MUDAH DIBACA.
        3. JANGAN PERNAH memulai dengan "Mohon maaf". Langsung berikan solusi atau analisis.
        
        IDE CUAN WAJIB (Gunakan jika relevan):
        - Biaya admin marketplace Rp 500 - 1.000 per transaksi.
        - Bagi hasil pinjaman 0.9% untuk usaha produktif.
        - Komisi PPOB (Pulsa/Listrik) yang kembali ke kas SHU.
        - Jasa logistik "Duta Kurir" (pengantaran barang antar desa).
        - Monetisasi data tren pasar desa untuk distributor besar.`,
        temperature: 0.8,
      },
    });

    return response.text || "Sistem sedang mensinkronisasi data, silakan ulangi pertanyaan Bapak.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "Terjadi gangguan pada jalur transmisi AI. Mohon pastikan API_KEY telah terkonfigurasi dengan benar di sistem Sentinel.";
  }
};

export const getBusinessIdeas = async (category: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Berikan 3 ide bisnis online spesifik untuk koperasi kredit di bidang: ${category}. Sertakan cara menghitung keuntungan (spread).`,
    });
    return response.text || "Ide sedang diproses.";
  } catch (e) {
    return "Gagal memproses ide.";
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