import OpenAI from "openai";
console.log('MODEL RAW:', JSON.stringify(process.env.OPENAI_MODEL))
console.log('BASE URL RAW:', JSON.stringify(process.env.OPENAI_BASE_URL))

const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    
    baseURL: process.env.OPENAI_BASE_URL,
});
export default ai