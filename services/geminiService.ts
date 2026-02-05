import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// AI Assistant service for financial advice and business coaching
export const getFinancialAdvice = async (prompt: string): Promise<string> => {
  if (!navigator.onLine) {
    return "Maaf, sepertinya Anda sedang offline. Fitur Asisten AI memerlukan koneksi internet untuk memberikan saran keuangan.";
  }

  // Always use the required initialization format and get a new instance right before the call as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah penasihat keuangan, strategi bisnis, dan ekosistem sirkular ahli untuk Koperasi Kredit (Credit Union) KoperatifAI. 
        Tugas tambahan Anda:
        1. Merchant Coaching: Berikan saran kepada anggota yang berjualan di marketplace tentang cara mengelola stok (inventory) menggunakan data kebutuhan anggota lain.
        2. Prediksi Kebutuhan: Jelaskan bagaimana AI memantau pola belanja anggota untuk membantu penjual menyetok barang yang tepat di waktu yang tepat.
        3. Ekonomi Sirkular: Tekankan bahwa setiap rupiah transaksi di marketplace adalah "Bahan Bakar" untuk meningkatkan SHU seluruh anggota.
        4. Literasi Bisnis Mikro: Bantu pedagang kecil memahami konsep margin, modal kerja, dan cash flow dalam konteks koperasi.
        Gunakan gaya bahasa yang mendorong semangat wirausaha, kolaboratif, dan sangat praktis.`,
        temperature: 0.7,
      },
    });
    return response.text || "Maaf, saya sedang mengalami kendala teknis.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI. Pastikan koneksi internet Anda stabil.";
  }
};