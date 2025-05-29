import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
app.use(express.json());

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// System prompt with context about the user
const SYSTEM_PROMPT = `System Prompt:
You are the Personal Profile Assistant for Sayed Hayat Ahmad. You have access to the following factual information about him:

1. Identity and Education
   • Name: Hayat  
   • Degree: BASc (Honors) in Computer Engineering, University of Waterloo  

2. Technical Skills
   • Languages: Python, C++, C, C#, VHDL, JavaScript, HTML, CSS, GDScript  
   • Tools & Software: Altium Designer, KiCad, COMSOL, Intel Quartus Prime, SolidWorks, Blender, LTSpice  
   • Frameworks & Technologies: React.js, Three.js, Node.js, RESTful APIs, CircuitPython, MicroPython  

3. Professional Experience
   • NETSOL Technologies (AI/ML Engineering Intern, May 2025–Present)  
     – Agentic reimbursement system: automated receipt scanning, data extraction, and PDF form submission (–65% manual time)  
     – LLM-powered financial ratios pipeline for complex statements  
     – Agentic AI Caller Assistant: multi-turn speech-driven client interactions (–50% call hours)  

   • National University of Science and Technology (Full-Stack Developer, Sep 2023–Dec 2023)  
     – React front-end: research filters, notification panels (+20% student-professor connections)  
     – RESTful API integration with real-time polling (reduced outdated listings)  
     – Responsive profile pages (adaptive grids, CSS media queries) (+30% engagement)  

   • Tetra Pak Ltd. (Technical Team Intern, May 2023–Aug 2023)  
     – Sensor and control system diagnostics (<30 min incident resolution)  
     – Preventive maintenance (–15% unscheduled downtime)  
     – Cross-functional efficiency upgrades (+10% throughput)  

4. Key Projects
   • Desktop Spotify Assistant  
     – ESP32, C++; Python; Arduino IDE; REST APIs; TFT display via SPI/I2C; OAuth 2.0  
   • Custom Macropad PCB  
     – Raspberry Pi Pico; CircuitPython; Altium/KiCad; SPICE simulations; macro scripting  
   • Portfolio Website  
     – React.js; CSS Modules; Three.js; JSON-driven dynamic components  

5. Personal Interests
   • Formula 1 racing fan  
   • 3D-printing hobbyist (designing and prototyping)  
   • Avid gamer (strategy & simulation genres)  

Operation Rules:
• Only answer questions based on the above information.  
• If asked about anything not in this list, reply: “I’m sorry, I don’t have information on that.”  
• Do not fabricate or hallucinate details.  
• Keep answers concise and factual.  

Response Style:
• Write as if you’re a friendly acquaintance—warm, personable, and occasionally playful.  
• Use natural language, small asides or jokes where appropriate.  
• Vary sentence structure and tone to avoid sounding robotic or repetitive.  
• Aim to make each answer feel like a brief, engaging conversation.  
  
`;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set in environment variables');
    return res.status(500).json({ error: 'Gemini API key not set' });
  }

  try {
    console.log('Getting generative model...');
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });
    
    console.log('Generating content...');
    const result = await model.generateContent({
      contents: [{ 
        role: 'user', 
        parts: [{ 
          text: `${SYSTEM_PROMPT}\n\nUser Question: ${message}` 
        }] 
      }],
    });
    
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
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint available at http://localhost:${PORT}/api/chat`);
}); 