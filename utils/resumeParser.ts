import pdfParse from "pdf-parse";
// import { promises as fs } from "fs";

export default async function resumeParser(buffer: Buffer): Promise<string> {
    try {
        const data = await pdfParse(buffer);
        return data.text;
    } catch (error) {
        console.log(error);
        return "";
    }
}