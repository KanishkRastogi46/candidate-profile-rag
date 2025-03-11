import CandidateForm from "@/components/CandidateForm";
import JobDescription from "@/components/JobDescription";
import CandidateProfile from "@/components/CandidateProfile";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-w-screen">
        <CandidateForm />
    </div>
  );
}
