import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
  apiKey: String(process.env.PINECONE_API_KEY)
});

async function initPinecone() {
    // const indexList = await pc.listIndexes();
    const indexName = "candidate-rag";
  
      await pc.createIndex({
        name: indexName,
        vectorType: "dense",
        dimension: 768, 
        metric: 'cosine', 
        spec: { 
          serverless: { 
            cloud: 'aws', 
            region: 'us-east-1' 
          }
        } 
      });
}


initPinecone()
export default pc;