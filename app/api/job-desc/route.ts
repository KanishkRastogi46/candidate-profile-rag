import pc from "@/lib/pinecone.config";
import embedJobData from "@/utils/textEmbedding";

const index = pc.index("candidate-rag");

export async function POST(req: Request) {
    try {
        const { jobDescription } = await req.json();

        const embeddedData = await embedJobData(jobDescription);

        const queryRes = await index.query({
            topK: 3,
            vector: embeddedData,
            includeMetadata: true,
            includeValues: false
        })

        console.log(queryRes);

        return Response.json({
            message: "Query successful",
            queryRes,
            success: true
        }, {status: 200})

    } catch (error: any) {
        return Response.json({
            message: error.message,
            success: false
        }, {status: 500})
    }
}