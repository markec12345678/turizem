import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Search the web for "Apartmaji Majda Pezdirc Griblje 70". Find their official website, booking.com, or any tourism listing. Extract 5 to 10 actual image URLs of this specific property (the house, the rooms, the Kolpa river nearby). Return ONLY a valid JSON array of string URLs. No markdown, no explanation.',
      config: {
        tools: [{ googleSearch: {} }]
      }
    });
    console.log(response.text);
  } catch (e) {
    console.error(e);
  }
}

run();
