import { GoogleGenAI } from '@google/genai';
import { MarketDataPoint } from '../types';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

export const generateMarketAnalysis = async (
  data: MarketDataPoint[]
): Promise<string> => {
  if (!apiKey) {
    return 'API key not configured. Unable to generate analysis.';
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
You are a Calgary real estate market analyst writing for buyers and sellers.

Analyze the following Calgary market data:
${JSON.stringify(data)}

Write one concise paragraph that:

- references actual changes in price and inventory
- clearly states if this is a buyer's market, seller's market, or balanced
- avoids generic phrases like "strong momentum" unless supported by the data
- uses a natural, human tone like a real agent speaking to a client
- keeps it clear, grounded, and specific

Do NOT:
- use buzzwords or fluff
- exaggerate trends
- use markdown, headings, or bullet points

Write like a real Calgary agent giving a quick market update.
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    let text = response.text || 'Analysis currently unavailable.';

    // small cleanup pass (makes it feel less robotic)
    text = text
      .replace(/\*\*/g, '')
      .replace(/\n+/g, ' ')
      .trim();

    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Unable to generate market analysis at this time.';
  }
};