import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(String(process.env.GEMINI_API_KEY));
const model = genAI.getGenerativeModel({ model: "text-embedding-004"});

export default async function embedData(data: string) {
    return (await model.embedContent(data)).embedding.values;
}
