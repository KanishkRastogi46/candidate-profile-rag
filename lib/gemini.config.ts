import { GoogleGenerativeAI } from "@google/generative-ai";
  
const apiKey = String(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `
    
    `
});

export const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export default model;