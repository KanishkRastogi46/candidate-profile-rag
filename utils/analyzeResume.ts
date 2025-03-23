import model from "@/lib/gemini.config";

export default async function analyzeResume(resumeText: string) {
    try {
        const prompts = {
            summary: 'Summarize this resume into a candidate profile (provide the result in markdown format):',
            evaluation: 'Evaluate this resume against standard tech industry roles (provide the result in markdown format):',
            feedback: 'Provide constructive feedback for this resume (provide the result in markdown format):'
        };
        
          let responses = {};
          for (const [key, prompt] of Object.entries(prompts)) {
            const result = await model.generateContent(`${prompt}\n\n${resumeText}`);
            responses = {...responses, [key]: result.response.text()};
          }
          return responses;
    } catch (error) {
        console.log(error);
    }
}