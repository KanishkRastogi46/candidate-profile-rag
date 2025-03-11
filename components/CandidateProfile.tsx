export default function CandidateProfile({ analysis }: { analysis: string }) {
  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg bg-white shadow-2xl">
      <h2 className="text-xl font-bold mb-4 text-black">Candidate Profile Summary</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-black">Analysis:</h3>
        <p className="text-black" dangerouslySetInnerHTML={{ __html: analysis.replace(/\n/g, '<br />') }}></p>
      </div>
    </div>
  );
}