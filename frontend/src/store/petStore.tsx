import { create } from "zustand";
import { persist } from "zustand/middleware";
import { petApi } from "../api";

export interface Pet {
  id: number;
  name: string;
  gender: string;
  imageFileName: string;
  description: string;
  age: string;
}

interface PetStore {
  pets: Array<Pet>;
  pet: Pet | null;
  getPets(): Promise<void>;
  getPet: (value: number) => void;
}

export const usePetStore = create(
  persist<PetStore>(
    (set) => ({
      pets: [],
      pet: null,
      getPets: async () => {
        const { data } = await petApi.get(`/kittens`);
        set((state) => ({ ...state, pets: data }));
      },
      getPet: (value: number) => {
        set((state) => ({
          ...state,
          pet: state.pets.filter((pet: Pet) => {
            if (pet.id === value) {
              return pet;
            }
          })[0],
        }));
      },
    }),
    {
      name: "pets",
    }
  )
);
