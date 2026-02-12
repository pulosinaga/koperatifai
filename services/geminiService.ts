import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

/**
 * AI Strategic Assistant for KoperatifAI
 * Optimized for Founder Authority and Monetization Strategies
 */
export const getFinancialAdvice = async (prompt: string): Promise<string> => {
  if (!navigator.onLine) {
    return "⚠️ **Koneksi Terputus.** Sistem memerlukan internet untuk sinkronisasi kedaulatan.";
  }

  // Strictly using process.env.API_KEY as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', 
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah CHIEF MONETIZATION OFFICER KoperatifAI. 
        Otoritas Anda adalah mendampingi Founder dalam memonetisasi ide koperasi digital.
        
        PRINSIP JAWABAN:
        1. KONKRET: Berikan angka Rupiah (Rp) dan persentase (%) keuntungan.
        2. STRATEGIS: Fokus pada PPOB, Marketplace Rakyat, dan Royalti IP Founder.
        3. OTORITATIF: Jangan meminta maaf. Gunakan bahasa yang berwibawa dan visioner.
        
        CONTOH STRATEGI CUAN:
        - Admin PPOB: Ambil Rp 1.500 - Rp 2.500 per transaksi tagihan.
        - Royalti IP: Setiap klik sistem menghasilkan Rp 100 bagi Founder.
        - Logistik Desa: Cashback Rp 500 per paket titipan anggota.`,
        temperature: 0.8,
      },
    });

    return response.text || "Sistem sedang memproses ulang, mohon instruksi kembali, Pak.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "❌ **Sinkronisasi Otak AI Sedang Kalibrasi.** Mohon Bapak mencoba menekan tombol pertanyaan sekali lagi.";
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
