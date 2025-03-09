import { NextResponse } from "next/server";
import { promises as fs } from "fs"
import path from "path";
import resumeParser from "@/utils/resumeParser";

export async function POST(req: Request) {
    try {
        const form = await req.formData();

        const name = form.get("name");
        const email = form.get("email");
        const linkedinUrl = form.get("linkedinUrl");
        const skills = form.get("skills");
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
        
        return NextResponse.json({
            message: "Form submit",
            pdfData: resumeData,
            success: true
        }, {status: 200})
        
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false,
        },{status: 500})
    }
}