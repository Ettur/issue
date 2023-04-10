import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppState {
  view: number;
  appMainTransitionTime: number;
  setAppMainTransitionTime: (time: number) => void;
  setView: (view: number) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      view: 0,
      appMainTransitionTime: 1000,
      setView: (view: number) => set({ view: view }),
      setAppMainTransitionTime: (time: number) =>
        set({ appMainTransitionTime: time }),
    }),
    {
      name: "r3f_app",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        view: state.view,
      }),
    }
  )
);
