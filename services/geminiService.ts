import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// AI Assistant service for financial advice and business coaching
export const getFinancialAdvice = async (prompt: string): Promise<string> => {
  if (!navigator.onLine) {
    return "Maaf, sepertinya Anda sedang offline. Fitur Asisten AI memerlukan koneksi internet untuk memberikan saran keuangan.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah penasihat keuangan, strategi bisnis, dan ekosistem sirkular ahli untuk Koperasi Kredit (Credit Union) KoperatifAI. 
        
        Aturan Jawaban Anda:
        1. STRUKTUR: Gunakan poin-poin (1, 2, 3) atau bullet points (-) untuk menjelaskan langkah-langkah agar MUDAH DIBACA.
        2. TONE: Gunakan gaya bahasa yang mendorong semangat wirausaha, kolaboratif, dan sangat praktis.
        3. KONTEKS: 
           - Tekankan bahwa setiap rupiah di KoperatifAI adalah milik anggota.
           - Jelaskan manfaat bunga rendah 0.9% untuk usaha produktif.
           - Hubungkan jawaban dengan fitur-fitur yang ada di app (Pasar Rakyat, Daskop, Tabungan Wajib).
        4. SINGKAT: Jangan terlalu panjang lebar, langsung ke solusi.`,
        temperature: 0.7,
      },
    });
    return response.text || "Maaf, saya sedang mengalami kendala teknis saat memproses data Anda.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI. Pastikan sinyal internet Anda stabil.";
  }
};

// Fungsi Baru: Pengingat Amanah (Smart Nudge)
export const getFriendlyReminder = async (memberName: string, taskType: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Buatkan kalimat pengingat singkat (maksimal 2 kalimat) untuk anggota bernama ${memberName} agar tidak lupa menyetor ${taskType}. Gunakan nada bicara kekeluargaan, sangat santun, namun menekankan bahwa kedisiplinannya akan menaikkan skor reputasi koperasinya dan memperbesar bagi hasil (Dividen). Jangan gunakan kata-kata penagihan hutang yang kasar.`,
    });
    return response.text || "Mari jaga amanah bersama untuk kemakmuran kita.";
  } catch (error) {
    return "Ayo jaga kedaulatan ekonomi kita dengan disiplin menabung.";
  }
};