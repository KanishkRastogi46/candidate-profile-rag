"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import profileStore from "@/store/profile.store";
import Link from "next/link";
import ProfileRanking from "./ProfileRanking";

type jobDataType = {
  title: string;
  company: string;
  location: string;
  jobDescription: string;
};

export default function JobDescription() {
  const profiles = profileStore((state) => state.profiles);
  const setProfile = profileStore((state) => state.setProfile);

  const [form, setForm] = useState<jobDataType>({
    title: "",
    company: "",
    location: "",
    jobDescription: "",
  });
  const [err, setErr] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async function (e: FormEvent) {
    e.preventDefault();
    console.log(form);
    setLoading(true);
    try {
      let res = await axios.post("/api/job-desc", form);
      if (res.data.success === true) {
        console.log(res.data);
        setProfile(res.data.queryRes.matches);
      }
    } catch (error: any) {
      console.log(error);
      setErr(error.message);
    } finally {
      setLoading(false);
      setForm({
        title: "",
        company: "",
        location: "",
        jobDescription: "",
      });
    }
  };

  return (
    <>
      <div className="min-w-md mx-auto mt-10 p-5 border rounded-lg bg-white shadow-2xl">
        {err && <p className="text-red-500">{err}</p>}
        <h2 className="text-xl font-bold mb-4 text-black">Job Description</h2>
        <form className="flex flex-col justify-center gap-6">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="border p-2 rounded-lg border-black text-black"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="border p-2 rounded-lg border-black text-black"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="border p-2 rounded-lg border-black text-black"
            required
          />
          <textarea
            name="description"
            placeholder="Job Description"
            value={form.jobDescription}
            onChange={(e) =>
              setForm({ ...form, jobDescription: e.target.value })
            }
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
        <Link href={"/"} className="text-blue-500 text-sm">
          Store resume data
        </Link>
      </div>
      {profiles && <ProfileRanking />}
    </>
  );
}
