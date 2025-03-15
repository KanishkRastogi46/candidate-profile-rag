import pc from "@/lib/pinecone.config";

type candidateDataType = {
    name: string,
    email: string,
    linkedinUrl: string,
    skills: string,
    resumeData: number[]
}

export default async function storeCandidate(candidateData: candidateDataType) {
    try {
        const index = pc.index("candidate-rag");
        await index.upsert([
            {
                id: candidateData.email,
                values: candidateData.resumeData,
                metadata: {
                    name: candidateData.name,
                    linkedinUrl: candidateData.linkedinUrl,
                    skills: candidateData.skills
                }
            }
        ])
    } catch (error: any) {
        console.log(error.message);
    }
}
