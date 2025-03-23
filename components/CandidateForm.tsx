"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import Link from "next/link";
import CandidateProfile from "./CandidateProfile";

type formDataType = {
  name: string;
  email: string;
  linkedinUrl: string;
  skills: string,
  resume: null | File;
};

export default function CandidateForm() {
  const [form, setForm] = useState<formDataType>({
    name: "",
    email: "",
    linkedinUrl: "",
    skills: "",
    resume: null as File | null,
  });
  const [err, setErr] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [analysis, setAnalysis] = useState<string>("");

  const handleSubmit = async function (e: FormEvent) {
    e.preventDefault();
    console.log(form)
    let formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("linkedinUrl", form.linkedinUrl);
    formData.append("skills", form.skills);
    formData.append("resume", form.resume || "");

    setLoading(true)
    try {
        let res = await axios.post("/api/form-submit", formData);
        if (res.data.success === true) {
          console.log(res.data);
          setAnalysis(`# Summary ${res.data.analysis.summary} # Evaluation ${res.data.analysis.Evaluation} # Feedback ${res.data.analysis.feedback}`);
        }
    } catch (error: any) {
        console.log(error)
        setErr(error.message)
    } finally {
        setLoading(false)
    }
  }

  return (
    <>
      <div className="min-w-md mx-auto mt-10 p-5 border rounded-lg bg-white shadow-2xl">
        {err && <p className="text-red-500">{err}</p>}
        <h2 className="text-xl font-bold mb-4 text-black">Candidate Application</h2>
        <form className="flex flex-col justify-center gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={e => setForm({...form, name: e.target.value})}
            className="border p-2 rounded-lg border-black text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={e => setForm({...form, email: e.target.value})}
            className="border p-2 rounded-lg border-black text-black"
            required
          />
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn Profile"
            onChange={e => setForm({...form, linkedinUrl: e.target.value})}
            className="border p-2 rounded-lg border-black text-black"
            required
          />
          <div className="flex flex-col">
            <textarea
                name="skills"
                placeholder="Enter skills"
                onChange={e => setForm({...form, skills: e.target.value})}
                className="border p-2 rounded-lg border-black text-black"
            />
            <p className="text-sm text-black">*Enter skills separated by commas</p>
          </div>
          <input
            type="file"
            accept="application/pdf"
            onChange={e => setForm({...form, resume: e.target.files?.[0] || null})}
            className="border p-2 rounded-lg border-black text-black"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <Link href={"/job-form"} className="text-blue-500 text-sm">
          Store job description
        </Link>
      </div>
      {analysis && <CandidateProfile analysis={analysis}/>}
    </>
  );
}
