'use client';
import { useEffect } from "react";
import profileStore from "@/store/profile.store";

export default function ProfileRanking() {
  const profiles = profileStore((state) => state.profiles);
  const clearProfile = profileStore((state) => state.clearProfile);

  useEffect(()=>{
    return () => clearProfile();
  },[])

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg bg-white shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 text-black">Profile Ranking</h2>
      <ul className="space-y-4">
        {profiles.map((profile, index) => (
          <li key={profile.id} className="p-4 border rounded-lg bg-gray-100 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold text-black">Rank {index + 1}</span>
              <span className="text-sm text-gray-500">Score: {profile.score}</span>
            </div>
            <p className="text-black"><strong>Name:</strong> {profile.metadata.name}</p>
            <p className="text-black"><strong>LinkedIn:</strong> <a href={profile.metadata.linkedinUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">{profile.metadata.linkedinUrl}</a></p>
            <p className="text-black"><strong>Skills:</strong> {profile.metadata.skills}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}