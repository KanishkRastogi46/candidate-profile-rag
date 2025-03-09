import { NextResponse } from "next/server";
import model from "@/lib/gemini.config";
import { promises as fs } from "fs";


export async function POST(req: Request) {
    try {
        
    } catch (error) {
        return NextResponse.json({
            message: "Internal server error",
            success: false
        }, {status: 500})
    }
}