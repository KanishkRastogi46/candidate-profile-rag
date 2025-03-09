import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
  apiKey: String(process.env.PINECONE_API_KEY)
});

const indexName = "candidate-profile-rag";

pc.createIndexForModel({
    name: indexName,
    cloud: 'aws',
    region: 'us-east-1',
    embed: {
        model: 'llama-text-embed-v2',
        fieldMap: { text: 'chunk_text' },
    },
    waitUntilReady: true,
})

const index = pc.index(indexName);

export default index;