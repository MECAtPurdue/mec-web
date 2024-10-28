import { create } from "zustand";

type BannerType = "Error" | "Success";

interface BannerState {
  message: string;
  count: number;
  type: BannerType | null;
  isBanner: boolean;
}

interface BannerAction {
  setBanner: (msg: string, t: BannerType) => void;
  clear: () => void;
}

const useBannerStore = create<BannerState & BannerAction>((set, get) => ({
  message: "",
  count: 0,
  type: null,
  isBanner: false,
  setBanner: (msg, t) => {
    if (get().message !== msg || get().type !== t) {
      return set(() => ({
        message: msg,
        count: 1,
        type: t,
        isBanner: true,
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
      type: null,
      isBanner: false,
    }));
  },
}));

export default useBannerStore;
