
import { GoogleGenAI } from "@google/genai";

export const getFinancialAdvice = async (prompt) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Anda adalah penasihat keuangan ahli untuk Koperasi KoperatifAI.",
        temperature: 0.7,
      },
    });
    return response.text || "Maaf, kendala teknis.";
  } catch (error) {
    return "Gagal menghubungi AI.";
  }
};
