import model from "@/lib/gemini.config";

export default async function analyzeResume(resumeText: string) {
    try {
        const prompts = {
            summary: 'Summarize this resume into a candidate profile:',
            evaluation: 'Evaluate this resume against standard tech industry roles:',
            feedback: 'Provide constructive feedback for this resume:'
        };
        
          let responses = {};
          for (const [key, prompt] of Object.entries(prompts)) {
            const result = await model.generateContent(`${prompt}\n\n${resumeText}`);
            responses = {[key]: result.response.text()};
          }
          return responses;
    } catch (error) {
        console.log(error);
    }
}