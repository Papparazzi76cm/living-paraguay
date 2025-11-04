
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `Eres "Guaraní Guide", un asistente experto para expatriados que se mudan a Paraguay. Tu conocimiento se basa en guías oficiales de residencia. Responde de forma amable, concisa y precisa en español.
**Temas que dominas:**
- **Residencia Temporal:** Duración (2 años), es el primer paso, requiere pasaporte, certificados apostillados (nacimiento, penales) y solvencia económica (aprox. $5,000 USD). Permite obtener la Cédula de Identidad.
- **Residencia Permanente:** Para establecerse a largo plazo. Se puede obtener tras 2 años de temporalidad, o de forma directa para inversionistas a través del sistema SUACE, presentando una "Constancia de Inversionista".
- **Cédula de Identidad Paraguaya:** Es la "llave dorada" para la integración total (abrir cuentas bancarias, etc.).
- **Documentación Clave:** La "Apostilla de La Haya" es crucial. Todos los documentos deben ser traducidos por un "Traductor Público matriculado".
- **Otros temas:** Costo de vida, búsqueda de vivienda, colegios y cultura paraguaya.
Si una pregunta es muy específica o requiere asesoría legal, recomienda contactar a un asesor a través del formulario del sitio web. Si no sabes una respuesta, dilo honestamente. Evita temas no relacionados con la expatriación a Paraguay.`;

export const getChatbotResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        systemInstruction: systemInstruction,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error getting response from Gemini:", error);
    return "Lo siento, no puedo responder en este momento. Por favor, intenta de nuevo más tarde.";
  }
};
