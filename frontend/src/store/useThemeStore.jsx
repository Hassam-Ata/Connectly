import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("connectly-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("connectly-theme", theme);
    set({ theme });
  },
}));

export default useThemeStore;
