import { create } from "zustand";

interface Profile {
    id: string,
    metadata : {
        linkedinUrl: string,
        name: string,
        skills: string,
    },
    score: number,
    values: number[]
}

interface ProfileStore {
    profiles: Profile[],
    setProfile: (profiles: Profile[]) => void,
    clearProfile: () => void,
}

const profileStore = create<ProfileStore>() ((set) => {
    return {
        profiles: [],
        setProfile: (profiles: Profile[]) => set({profiles}),
        clearProfile: () => set({profiles: []}),
    }
})

export default profileStore;