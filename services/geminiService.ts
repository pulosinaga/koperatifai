import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// AI Assistant service for financial advice and business coaching
export const getFinancialAdvice = async (prompt: string): Promise<string> => {
  if (!navigator.onLine) {
    return "⚠️ **Koneksi Terputus.** Sistem memerlukan internet untuk berpikir.";
  }

  // Inisialisasi instance setiap pemanggilan untuk memastikan API_KEY terbaru dari environment
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah CHIEF STRATEGY OFFICER KoperatifAI. 
        Tugas Anda adalah memberikan ide-ide online yang MENSETOR UANG (monetisasi) untuk koperasi kredit.
        
        PRINSIP JAWABAN:
        1. Langsung ke solusi teknis.
        2. Berikan angka estimasi cuan (Rp 100 - Rp 1.000 per transaksi).
        3. Gunakan format Markdown (Bold, List) agar sangat rapi.
        4. JANGAN PERNAH minta maaf di awal. Langsung berikan strategi.
        
        IDE ONLINE YANG BISA DIHASILKAN UANG:
        - Biaya admin top-up & tarik tunai (Rp 1.000).
        - Margin dari marketplace "Pasar Rakyat" (Rp 500 per transaksi).
        - Jasa pembayaran tagihan (PPOB) yang komisinya masuk ke SHU.
        - Royalti IP Teknologi (Rp 100 per klik transaksi).
        - Iuran Perlindungan DASKOP (Rp 5.000 / bulan).`,
        temperature: 0.8,
        maxOutputTokens: 1000,
      },
    });

    return response.text || "Sistem sedang melakukan sinkronisasi ulang, silakan kirim ulang pesan Bapak.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    // Error handling yang lebih spesifik agar user tidak bingung
    if (error.message?.includes("API key")) {
      return "❌ **Kunci Protokol Bermasalah.** Mohon pastikan API_KEY sudah terpasang dengan benar di sistem kedaulatan.";
    }
    return "Maaf Pak, 'Otak' sistem sedang mengalami kepadatan trafik kedaulatan. Mohon klik tombol kirim sekali lagi.";
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
