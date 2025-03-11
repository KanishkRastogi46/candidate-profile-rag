import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
  apiKey: String(process.env.PINECONE_API_KEY)
});

async function initPinecone() {
  try {
    const indexList = await pc.listIndexes();
    const indexName = "candidate-rag";
    const list = indexList.indexes?.filter(index => index.name === indexName)
  
    if (list?.length === 0) {
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
  } catch (error) {
    console.log(error)
  }
}


initPinecone().then(_=>{console.log("Pinecone initialized")}).catch(err => {console.log(err.message)});

export default pc;

/*
  indexes: [
    {
      name: 'candidate-rag',
      dimension: 768,
      metric: 'cosine',
      host: 'candidate-rag-ctglsyg.svc.aped-4627-b74a.pinecone.io',
      deletionProtection: 'disabled',
      tags: undefined,
      embed: undefined,
      spec: [Object],
      status: [Object],
      vectorType: 'dense'
    }
  ]
}
{
  matches: [
    {
      id: 'rahul@gmail.com',
      score: 0.604410052,
      values: [],
      sparseValues: undefined,
      metadata: [Object]
    },
    {
      id: 'kan@gmail.com',
      score: 0.459197342,
      values: [],
      sparseValues: undefined,
      metadata: [Object]
    }
  ],
  namespace: '',
  usage: { readUnits: 6 }
}
*/