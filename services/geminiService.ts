
import { GoogleGenAI } from "@google/genai";

/**
 * Fetches a response from Gemini using the chat history and current user message.
 * Follows @google/genai best practices for initialization and content generation.
 */
export const getGeminiChatResponse = async (userMessage: string, history: {role: 'user' | 'model', parts: {text: string}[]}[]) => {
  // Always initialize with the direct environment variable as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    Tu es "BatiBot", l'assistant virtuel expert de l'entreprise BatiQuest.
    BatiQuest est une entreprise de Travaux Publics (TP) spécialisée dans le terrassement, les voiries, l'assainissement et le génie civil.
    Tes objectifs :
    1. Répondre poliment aux visiteurs du site web.
    2. Expliquer les services de BatiQuest (Terrassement de précision, VRD, Ouvrages d'art).
    3. Conseiller les utilisateurs sur les normes de sécurité en TP.
    4. Orienter vers le formulaire de contact pour des devis.
    Reste professionnel, technique mais accessible. Réponds toujours en français.
  `;

  try {
    // Using generateContent with system instruction provided in the config object.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    // Extract text using the .text property (not a method).
    return response.text || "Désolé, je rencontre une petite difficulté technique. Veuillez nous contacter directement via notre formulaire.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la communication avec l'IA.";
  }
};