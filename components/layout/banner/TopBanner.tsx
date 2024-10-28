"use client";

import useErrorStore from "@/lib/store/useBannerStore";

import { Cross2Icon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const ErrorBanner = () => {
  const { message, count, type, isBanner, clear } = useErrorStore();

  if (!isBanner) return null;

  return (
    <div className="fixed top-[72px] z-50 w-full">
      {/* <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[72px]"></div> */}
      <div
        className={cn(
          type === "Error" && "bg-destructive",
          "bg-muted flex justify-between items-center container mx-auto max-w-screen-xl p-4 rounded-lg"
        )}
      >
        <div>
          {message} {count > 1 && <span>({count})</span>}
        </div>
        <button
          onClick={clear}
          className="hover:text-gray-300 focus:outline-none text-lg"
        >
          <Cross2Icon />
        </button>
      </div>
    </div>
  );
};

export default ErrorBanner;
