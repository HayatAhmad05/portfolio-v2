import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  // Use environment variable for API key
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY is not set in environment variables');
    return res.status(500).json({ error: 'Gemini API key not set' });
  }

  try {
    console.log('Initializing Google Generative AI...');
    const genAI = new GoogleGenerativeAI(apiKey);
    console.log('Getting generative model...');
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    console.log('Generating content...');
    const result = await model.generateContent(message);
    console.log('Getting response...');
    const response = await result.response;
    console.log('Getting text...');
    const reply = response.text();
    
    console.log('Successfully generated reply');
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Detailed error in chat API:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    
    return res.status(500).json({ 
      error: 'Failed to get response from Gemini', 
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
