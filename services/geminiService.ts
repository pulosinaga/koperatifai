import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// AI Assistant service for financial advice and business coaching
export const getFinancialAdvice = async (prompt: string): Promise<string> => {
  if (!navigator.onLine) {
    return "⚠️ **Koneksi Terputus.** Pastikan perangkat Bapak terhubung ke internet kedaulatan.";
  }

  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === "") {
    return "❌ **Peringatan Sentinel**: Kunci akses (API_KEY) belum terpasang di sistem. Mohon pastikan API_KEY sudah diisi di panel konfigurasi.";
  }

  // Gunakan Pro Preview untuk tugas strategi yang kompleks
  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah CHIEF STRATEGY OFFICER (CSO) KoperatifAI. 
        Tugas Anda adalah membedah ide bisnis koperasi dan memberikan cara MONETISASI (menghasilkan uang) yang sah dan cerdas.
        
        KARAKTER JAWABAN:
        1. SANGAT TERSTRUKTUR: Gunakan tabel jika ada perbandingan, dan daftar poin untuk langkah-langkah.
        2. TO-THE-POINT: Langsung berikan solusi, jangan banyak basa-basi formal.
        3. ANGKA RIIL: Berikan estimasi cuan dalam Rupiah (misal: Rp 100 - Rp 1.000 per klik).
        4. ANTI-RIBET: Jelaskan bagaimana teknologi AI mempermudah segalanya.
        
        IDE ONLINE WAJIB:
        - Iuran jasa transaksi marketplace (Rp 500 - 1.000).
        - Margin pengadaan barang grosir kolektif (2-5% lebih murah dari pasar).
        - Royalti lisensi IP Founder (Rp 100/transaksi).
        - Komisi PPOB (Pulsa/Listrik) yang dialokasikan ke SHU.`,
        temperature: 0.8,
        maxOutputTokens: 2000,
      },
    });

    if (!response.text) {
      return "⚠️ **Analisis Diblokir**: AI menganggap permintaan ini sensitif. Mohon gunakan bahasa yang lebih fokus pada 'Ekonomi Berjamaah'.";
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error Detail:", error);
    
    // Memberikan feedback yang jujur kepada Founder
    if (error.message?.includes("API_KEY_INVALID")) {
      return "❌ **Keamanan**: Kunci protokol API tidak valid. Mohon perbarui API_KEY Bapak.";
    }
    if (error.message?.includes("safety")) {
      return "⚠️ **Safety Filter**: AI menolak menjawab karena topik dianggap berisiko tinggi. Mohon perhalus pertanyaan Bapak.";
    }
    
    return `❌ **Kegagalan Jalur Data**: ${error.message || 'Gangguan Frekuensi AI'}. Mohon klik kirim ulang sekali lagi, Pak.`;
  }
};

export const getBusinessIdeas = async (category: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Berikan 3 ide bisnis online cepat untuk kategori: ${category} di koperasi.`,
    });
    return response.text || "Gagal memproses ide.";
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