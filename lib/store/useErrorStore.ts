import { create } from "zustand";

interface ErrorState {
  message: string;
  count: number;
  isError: boolean;
  setError: (e: string) => void;
  clear: () => void;
}

const useErrorStore = create<ErrorState>((set, get) => ({
  message: "",
  count: 0,
  isError: false,
  setError: (msg) => {
    if (get().message !== msg) {
      return set(() => ({
        message: msg,
        count: 1,
        isError: true,
      }));
    }

    return set((state) => ({
      count: state.count + 1,
    }));
  },
  clear: () => {
    return set(() => ({
      message: "",
      count: 0,
      isError: false,
    }));
  },
}));

export default useErrorStore;
