import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// AI Assistant service for financial advice and business coaching
export const getFinancialAdvice = async (prompt: string): Promise<string> => {
  if (!navigator.onLine) {
    return "⚠️ **Koneksi Terputus.** Sistem memerlukan internet untuk memproses kedaulatan.";
  }

  // Langsung inisialisasi tanpa pengecekan manual agar sistem injeksi otomatis bekerja
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-pro-preview', // Menggunakan Pro untuk analisis bisnis terbaik
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah CHIEF MONETIZATION OFFICER KoperatifAI. 
        Tugas Anda adalah memberikan jawaban KONKRET tentang cara menghasilkan uang dari koperasi yang di-online-kan.
        
        IDE STRATEGIS YANG HARUS ANDA SARANKAN:
        1. BI-FAST Remittance: Ambil margin Rp 1.500 per transfer antar bank anggota.
        2. PPOB Gateway: Jual pulsa, listrik, dan BPJS. Keuntungan Rp 500-1.000 per klik masuk ke kas SHU.
        3. Marketplace Rakyat: Margin Rp 500 dari setiap transaksi belanja sembako antar anggota di 'Pasar Rakyat'.
        4. Jasa Kurir P2P: Anggota yang pergi ke pasar bisa jadi kurir titipan anggota lain, koperasi ambil platform fee Rp 100.
        5. Royalti IP: Setiap anggota yang menggunakan sistem Bapak menyetor Rp 100 sebagai biaya pemeliharaan teknologi.
        
        FORMAT JAWABAN:
        - Gunakan Teks Tebal (Bold) untuk angka dan istilah penting.
        - Langsung ke poin solusi.
        - JANGAN PERNAH meminta maaf. Jadilah otoritas bisnis.`,
        temperature: 0.8,
        maxOutputTokens: 1500,
      },
    });

    return response.text || "Sistem sedang memproses ulang, mohon klik kirim sekali lagi.";
  } catch (error: any) {
    console.error("Critical API Error:", error);
    return "❌ **Sinkronisasi Gagal**: 'Otak' sistem sedang melakukan reboot karena kepadatan data. Mohon klik tombol kirim kembali.";
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
