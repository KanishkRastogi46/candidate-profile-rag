import { NextResponse } from "next/server";
import { promises as fs } from "fs"
import path from "path";
import resumeParser from "@/utils/resumeParser";
import embedResumeData from "@/utils/textEmbedding";
import storeCandidate from "@/utils/storeCandidate";
import analyzeResume from "@/utils/analyzeResume";

export async function POST(req: Request) {
    try {
        const form = await req.formData();

        const name = form.get("name") as string;
        const email = form.get("email") as string;
        const linkedinUrl = form.get("linkedinUrl") as string;
        const skills = form.get("skills") as string;
        const resume = form.get("resume") as File;

        console.log(form);

        if (!name || !email || !linkedinUrl || !skills || !resume) {
            return NextResponse.json({
                message: "All fields are required",
                success: false,
            }, {status: 400})
        }

        const buffer = Buffer.from(await resume.arrayBuffer());
        await fs.writeFile(path.join(process.cwd(), "/public/upload/", resume.name), buffer);
        let resumeData = await resumeParser(buffer);
        await fs.unlink(path.join(process.cwd(), '/public/upload/', resume.name))

        const embeddedData = await embedResumeData(resumeData);
        const analysis = await analyzeResume(resumeData);

        const candidateData = {
            name,
            email,
            linkedinUrl,
            skills,
            resumeData: embeddedData,
        }

        await storeCandidate(candidateData);
        
        return NextResponse.json({
            message: "Form submit and candidate data added",
            pdfData: resumeData,
            analysis,
            success: true
        }, {status: 200})
        
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false,
        },{status: 500})
    }
}